import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import axios from 'axios';
import { FaUpload, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OcrComponent = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [idExists, setIdExists] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      extractTextFromImage(file);
    }
  };

  const extractTextFromImage = async (file) => {
    setIsLoading(true);
    setError('');
    try {
      const { data: { text } } = await Tesseract.recognize(file, 'ara', {
        logger: info => console.log(info),
      });
      setText(text);
      const nationalId = extractNationalId(text);
      if (nationalId) {
        checkIdExistence(nationalId);
      } else {
        setError('لم يتم استخراج الرقم الوطني. يرجى التحقق من الصورة.');
      }
    } catch (err) {
      console.error('خطأ أثناء عملية OCR:', err);
      setError('حدث خطأ أثناء معالجة الصورة. الرجاء المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const extractNationalId = (text) => {
    const match = text.match(/الرقم الوطني:\s*(\d+)/);
    return match ? match[1] : null;
  };

  const checkIdExistence = async (id) => {
    try {
      const response = await axios.get("http://localhost:4003/api/voting/users");
      const users = response.data;
      const idExistsInUsers = users.some(user => user.national_id == id);
      setIdExists(idExistsInUsers);
    } catch (err) {
      console.error('خطأ أثناء طلب API:', err);
      setError('حدث خطأ أثناء التحقق من الرقم الوطني. الرجاء المحاولة مرة أخرى.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-3 ">
      <h1 className="text-2xl font-bold text-gray-900">تحقق من تسجيل الناخبين</h1>
      <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 cursor-pointer">
        <div className="flex items-center justify-center w-full p-10 border border-gray-300 rounded-md shadow-sm transition-colors hover:bg-gray-50">
          {image ? (
            <img src={image} alt="معاينة" className="w-full h-auto object-cover rounded-md" />
          ) : (
            <div className="flex items-center space-x-2">
              <FaUpload className="text-gray-500" />
              <span>اختر صورة لإثبات الهوية</span>
            </div>
          )}
        </div>
        <input id="image-upload" type="file" accept="image/*" onChange={handleImageChange} className="sr-only" />
      </label>
      {isLoading && <p className="text-gray-500">جاري التحقق من الهوية...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {text && (
        <div className="mt-4">
        </div>
      )}
      {idExists !== null && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900">حالة الرقم الوطني:</h2>
          <p className={`flex items-center text-gray-700 ${idExists ? 'text-green-500' : 'text-red-500'}`}>
            {idExists ? (
              <>
                <FaCheckCircle className="mr-2" />
                الرقم الوطني مسجل في قاعدة بيانات الناخبين.
              </>
            ) : (
              <>
                <FaTimesCircle className="mr-2" />
                الرقم الوطني غير موجود في قاعدة بيانات الناخبين.
              </>
            )}
          </p>
        
        </div>
      )}
    </div>
  );
};

export default OcrComponent;