import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      tour,
      date,
      name,
      people,
      email,
      message,
    } = body;

    if (!tour || !date || !name || !people || !email) {
      return NextResponse.json(
        {
          error: "Required fields are missing",
        },
        {
          status: 400,
        }
      );
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,

      to: process.env.CONTACT_RECEIVER_EMAIL,

      replyTo: email,

      subject: `✈️ Шинэ аяллын хүсэлт — ${name}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: auto;
            padding: 30px;
          "
        >
          <h1>Шинэ аяллын хүсэлт ✈️</h1>

          <hr />

          <p>
            <strong>👤 Захиалагч:</strong>
            ${escapeHtml(name)}
          </p>

          <p>
            <strong>📧 Email:</strong>
            ${escapeHtml(email)}
          </p>

          <p>
            <strong>🗺 Аялал:</strong>
            ${escapeHtml(tour)}
          </p>

          <p>
            <strong>📅 Огноо:</strong>
            ${escapeHtml(date)}
          </p>

          <p>
            <strong>👥 Хүний тоо:</strong>
            ${escapeHtml(people)}
          </p>

          <p>
            <strong>💬 Нэмэлт хүсэлт:</strong>
          </p>

          <div
            style="
              background: #f5f5f5;
              padding: 15px;
              border-radius: 10px;
            "
          >
            ${escapeHtml(message || "Нэмэлт хүсэлт байхгүй")}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Email sending failed",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}