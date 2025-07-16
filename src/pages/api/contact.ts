import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }: any) {
  const body = await request.json();
  const { name, email, message } = body;

  try {
    await resend.emails.send({
      from: 'Landing Contact <gerencia.general@slyfox.com.co>',
      to: 'nicolas.cr0603@gmail.com',
      subject: `Mensaje de ${name}`,
      html: `
        <h2>Mensaje nuevo desde la landing</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong><br/>${message}</p>
      `
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: 'Error al enviar' }), { status: 500 });
  }
}
