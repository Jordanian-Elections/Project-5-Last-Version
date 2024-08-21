const knex = require("../knex-config"); // Import your knex instance
const contact_request = require("../migrations/20240815190812_contact_request");
const users = require("../migrations/10240819073933_users");
const LocalElectionRequest = require("../migrations/20240815190736_local_election_requests");
const PartyElectionRequest = require("../migrations/20240816161748_party_election_requests"); //do not forget to change

exports.contactRequest = async (req, res) => {
  // Extracting data from the request body
  const { contact_name, contact_national_id, phone, subject, message } =
    req.body;

  try {
    // Check if contact_national_id is provided
    if (contact_national_id) {
      // Check if contact_national_id exists in users table
      const user = await knex("users")
        .where({ national_id: contact_national_id })
        .first();
      if (!user) {
        return res.status(400).json({
          error:
            "Invalid contact_national_id. It must exist in the users table.",
        });
      }
    }

    // Insert data into the contact_request table
    const result = await knex("contact_request")
      .insert({
        contact_name: contact_name,
        contact_national_id: contact_national_id || null, // Use null if no value is provided
        phone: phone,
        subject: subject,
        message: message,
        created_at: knex.fn.now(), // Set created_at to current timestamp
        updated_at: knex.fn.now(), // Set updated_at to current timestamp
      })
      .returning("*");

    console.log("Inserted row:", result[0]);

    // Respond with the inserted row
    res.status(201).json(result[0]);
  } catch (err) {
    console.error("Error inserting data:", err);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
};

exports.getUserByNationalId = async (req, res) => {
  try {
    const { national_id } = req.params;

    // Query the users table to find the user by national_id
    const user = await knex("users")
      .where({ national_id: national_id })
      .first();

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching user data", error: error.message });
  }
};

console.log("post error");

// Handle the creation of a local election request
exports.createLocalElectionRequest = async (req, res) => {
  try {
    console.log("Received request body:", req.body);

    const tableInfo = await knex("local_election_requests").columnInfo();
    console.log("Table schema:", tableInfo);

    const { national_id, local_list_name, members } = req.body;

    console.log("Extracted data:", { national_id, local_list_name, members });

    if (
      !national_id ||
      !local_list_name ||
      !Array.isArray(members) ||
      members.length === 0
    ) {
      console.log("Invalid input data");
      return res.status(400).json({
        message: "Invalid input data",
      });
    }

    console.log("Attempting to insert into local_election_requests");
    const [newRequestId] = await knex("local_election_requests")
      .insert({
        national_id: national_id,
        local_list_name: local_list_name,
      })
      .returning("id");

    console.log("Inserted request, ID:", newRequestId);

    const memberInserts = members.map((member) => ({
      request_id: newRequestId.id,
      member_name: member.name,
    }));

    console.log("Attempting to insert members:", memberInserts);
    console.log(newRequestId.id);
    await knex("members").insert(memberInserts);

    console.log("Members inserted successfully");

    res.status(201).json({
      message: "Local election request created successfully",
      id: newRequestId.id,
    });
  } catch (error) {
    console.error("Error creating local election request:", error);
    res.status(500).json({
      message: "Error creating local election request",
      error: error.message,
    });
  }
};

const VALID_PARTY_NAMES = [
  "حزب جبهة العمل الإسلامي",
  "حزب الوسط الإسلامي",
  "الحزب الوطني الأردني",
  "حزب الحياة الأردني",
  "حزب الرسالة",
  "حزب الشعب الديمقراطي الأردني (حشد)",
  "حزب الوحدة الشعبية الديمقراطي الأردني",
  "حزب البعث العربي التقدمي",
  "حزب الجبهة الأردنية الموحدة",
  "حزب المؤتمر الوطني (زمزم)",
];

exports.createPartyElectionRequest = async (req, res) => {
  try {
    const { national_id, party_list_name } = req.body;

    // Validate that the party name is in the list of valid names
    if (!VALID_PARTY_NAMES.includes(party_list_name)) {
      return res.status(400).json({ message: "Invalid party list name" });
    }

    const newRequest = await knex("party_election_requests")
      .insert({
        national_id,
        party_list_name,
      })
      .returning("id"); // Ensure to return the ID of the new row

    res.status(201).json({
      message: "Party election request created successfully",
      id: newRequest[0],
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating party election request",
      error: error.message,
    });
  }
};
