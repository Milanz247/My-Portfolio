import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Clean Freelancer Notification (TO YOU)
    const notificationEmail = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Project Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #ffffff;">
          
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff; padding: 40px 20px;">
            <tr>
              <td align="center">
                
                <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 0 0 30px 0; border-bottom: 1px solid #000000;">
                      <h1 style="margin: 0; color: #000000; font-size: 24px; font-weight: 600;">New Project Inquiry</h1>
                      <p style="margin: 8px 0 0 0; color: #000000; font-size: 14px;">Portfolio Contact Form</p>
                    </td>
                  </tr>

                  <!-- Client Information -->
                  <tr>
                    <td style="padding: 40px 0 30px 0;">
                      <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Client Details</h2>
                      
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td width="120" style="padding: 12px 0; color: #000000; font-size: 14px; font-weight: 500;">Name</td>
                          <td style="padding: 12px 0; color: #000000; font-size: 14px; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                          <td width="120" style="padding: 12px 0; color: #000000; font-size: 14px; font-weight: 500; border-top: 1px solid #e0e0e0;">Email</td>
                          <td style="padding: 12px 0; border-top: 1px solid #e0e0e0;">
                            <a href="mailto:${email}" style="color: #000000; font-size: 14px; font-weight: 600; text-decoration: underline;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td width="120" style="padding: 12px 0; color: #000000; font-size: 14px; font-weight: 500; border-top: 1px solid #e0e0e0;">Date</td>
                          <td style="padding: 12px 0; color: #000000; font-size: 14px; font-weight: 600; border-top: 1px solid #e0e0e0;">${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Message -->
                  <tr>
                    <td style="padding: 0 0 40px 0;">
                      <h2 style="margin: 0 0 20px 0; color: #000000; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Project Details</h2>
                      <div style="padding: 24px; border: 1px solid #000000; color: #000000; font-size: 15px; line-height: 1.8;">
                        ${message.replace(/\n/g, '<br>')}
                      </div>
                    </td>
                  </tr>

                  <!-- Action -->
                  <tr>
                    <td style="padding: 0 0 40px 0; border-top: 1px solid #e0e0e0;">
                      <a href="mailto:${email}?subject=Re:%20Your%20Inquiry" style="display: inline-block; margin-top: 30px; padding: 14px 40px; background: #000000; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600;">Reply to Client</a>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 0 0 0; border-top: 1px solid #000000; text-align: center;">
                      <p style="margin: 0; color: #000000; font-size: 12px;">Automated notification from your portfolio</p>
                      <p style="margin: 8px 0 0 0; color: #000000; font-size: 12px;">Milan Madusanka · Full-Stack Developer</p>
                    </td>
                  </tr>
                  
                </table>
                
              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `,
    };

    // Clean Freelancer Auto-Reply (TO VISITOR)
    const autoReplyEmail = {
      from: `Milan Madusanka <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Thank you for your message, ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #ffffff;">
          
          <table width="100%" cellpadding="0" cellspacing="0" style="background: #ffffff; padding: 40px 20px;">
            <tr>
              <td align="center">
                
                <table width="600" cellpadding="0" cellspacing="0" style="background: #ffffff;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="padding: 0 0 30px 0; border-bottom: 1px solid #000000;">
                      <h1 style="margin: 0; color: #000000; font-size: 28px; font-weight: 600;">Milan Madusanka</h1>
                      <p style="margin: 8px 0 0 0; color: #000000; font-size: 14px;">Full-Stack Developer & DevOps Engineer</p>
                    </td>
                  </tr>

                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 40px 0;">
                      
                      <p style="margin: 0 0 24px 0; color: #000000; font-size: 16px; line-height: 1.6;">
                        Hello ${name},
                      </p>

                      <p style="margin: 0 0 24px 0; color: #000000; font-size: 15px; line-height: 1.7;">
                        Thank you for reaching out. I've received your message and will respond within 24 hours.
                      </p>

                      <!-- Response Box -->
                      <div style="padding: 20px; border: 1px solid #000000; margin: 30px 0;">
                        <p style="margin: 0; color: #000000; font-size: 14px; font-weight: 600;">Expected Response Time</p>
                        <p style="margin: 8px 0 0 0; color: #000000; font-size: 14px; line-height: 1.6;">
                          I typically respond to all inquiries within 24 business hours. Thank you for your patience.
                        </p>
                      </div>

                      <p style="margin: 24px 0; color: #000000; font-size: 15px; line-height: 1.7;">
                        In the meantime, feel free to explore my work:
                      </p>

                      <!-- Links -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin: 20px 0;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                            <a href="https://github.com/Milanz247" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 500;">GitHub →</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                            <a href="https://linkedin.com/in/milanmadusanka" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 500;">LinkedIn →</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                            <a href="https://medium.com/@milanmadusankamms" style="color: #000000; text-decoration: none; font-size: 14px; font-weight: 500;">Medium →</a>
                          </td>
                        </tr>
                      </table>

                      <!-- Signature -->
                      <div style="margin-top: 40px; padding-top: 30px; border-top: 1px solid #e0e0e0;">
                        <p style="margin: 0 0 8px 0; color: #000000; font-size: 15px; font-weight: 600;">Best regards,</p>
                        <p style="margin: 0 0 4px 0; color: #000000; font-size: 16px; font-weight: 600;">Milan Madusanka</p>
                        <p style="margin: 0; color: #000000; font-size: 14px;">Full-Stack Developer & DevOps Engineer</p>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="padding: 30px 0 0 0; border-top: 1px solid #000000; text-align: center;">
                      <p style="margin: 0 0 8px 0; color: #000000; font-size: 14px;">
                        <a href="mailto:milanmadusankamms@gmail.com" style="color: #000000; text-decoration: underline;">milanmadusankamms@gmail.com</a>
                      </p>
                      <p style="margin: 0; color: #000000; font-size: 12px;">
                        <a href="https://github.com/Milanz247" style="color: #000000; text-decoration: none; margin: 0 8px;">GitHub</a>
                        <span>·</span>
                        <a href="https://linkedin.com/in/milanmadusanka" style="color: #000000; text-decoration: none; margin: 0 8px;">LinkedIn</a>
                        <span>·</span>
                        <a href="https://medium.com/@milanmadusankamms" style="color: #000000; text-decoration: none; margin: 0 8px;">Medium</a>
                      </p>
                    </td>
                  </tr>
                  
                </table>
                
              </td>
            </tr>
          </table>
          
        </body>
        </html>
      `,
    };

    await Promise.all([
      transporter.sendMail(notificationEmail),
      transporter.sendMail(autoReplyEmail),
    ]);

    return NextResponse.json(
      { success: true, method: 'gmail-direct', emailsSent: 2 },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
