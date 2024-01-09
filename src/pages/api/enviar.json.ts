
import { Resend } from 'resend';

export async function GET({request}) {
  try {
    console.log(request)
    const url = new URL(request.url)
    const params = new URLSearchParams(url.search)

    const name = params.get('name');
    const email = params.get('email');
    const textarea = params.get('textarea');
    const celular = params.get('celular');
    const resendClient = new Resend('re_4LRDNvce_Ab9FXeh9vpRgZDhZPKJJW51V');

    await resendClient.emails.send({
      from: 'contacto@maicronet.com',
      to: 'gerardolozano51@icloud.com',
      subject: 'hello world',
      text: `Nombre:${name}, Email: ${email}, Celular: ${celular}, Comentario: ${textarea}`,
    });

    return new Response(JSON.stringify({ message: 'Mensaje enviado con éxito' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}