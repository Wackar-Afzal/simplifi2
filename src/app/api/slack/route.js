export async function POST(req) {
    try {
      const body = await req.json();
      console.log("Request body:", body);
      const { name, work_email, email, phoneNumber, company_name, job_title, number_of_employees, country, message, department } = body;

      // Use work_email if available, otherwise use email
      const emailAddress = work_email || email;

      // console.log(req)
      const slackMessage = {
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
              ...(emailAddress ? [{ type: "mrkdwn", text: `*E-Mail:*\n${emailAddress}` }] : []),
              ...(company_name ? [{ type: "mrkdwn", text: `*Company:*\n${company_name}` }] : []),
              ...(phoneNumber ? [{ type: "mrkdwn", text: `*Phone Number:*\n${phoneNumber}` }] : []),
              ...(country ? [{ type: "mrkdwn", text: `*Country:*\n${country}` }] : []),
              ...(job_title ? [{ type: "mrkdwn", text: `*Job Title:*\n${job_title}` }] : []),
              ...(department ? [{ type: "mrkdwn", text: `*Department:*\n${department}` }] : []),
              ...(number_of_employees ? [{ type: "mrkdwn", text: `*Employees:*\n${number_of_employees}` }] : []),
            ],
          },
          ...(message ? [
            { type: "divider" },
            {
              type: "section",
              text: { type: "mrkdwn", text: `*Message:*\n${message}` },
            }
          ] : []),
        ],
      };
  
      console.log("Slack message being sent:", JSON.stringify(slackMessage, null, 2));
      const response = await fetch(process.env.SLACL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackMessage),
      });
      // console.log(response,"slack reposne")
  
      if (!response.ok) throw new Error("Failed to submit");
  
      return new Response(JSON.stringify({ success: true, message: "Submitted successfully" }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }
  }
  