export async function POST(req) {
    try {
      const { name, work_email, phoneNumber, company_name, job_title, number_of_employees } = await req.json();

      // console.log(req)
      const message = {
        channel: "C07PE2GAM42",
        blocks: [
          {
            type: "section",
            text: { type: "plain_text", text: "A new contact form was submitted" },
          },
          { type: "divider" },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Name:*\n${name}` },
              { type: "mrkdwn", text: `*E-Mail:*\n${work_email}` },
              ...(phoneNumber ? [{ type: "mrkdwn", text: `*Phone Number:*\n${phoneNumber}` }] : []),
              ...(company_name ? [{ type: "mrkdwn", text: `*Company:*\n${company_name}` }] : []),
              ...(job_title ? [{ type: "mrkdwn", text: `*Job Title:*\n${job_title}` }] : []),
              ...(number_of_employees ? [{ type: "mrkdwn", text: `*Employees:*\n${number_of_employees}` }] : []),
            ],
          },
        ],
      };
  
      const response = await fetch(process.env.SLACL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
      });
      // console.log(response,"slack reposne")
  
      if (!response.ok) throw new Error("Failed to submit");
  
      return new Response(JSON.stringify({ success: true, message: "Submitted successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
  }
  