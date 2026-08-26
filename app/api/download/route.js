import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'Menoessence Client Onboarding Form.pdf');

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        // YAHAN HAI ASLI JADU: Safari ko lagta hai yeh koi normal file hai (PDF nahi) 
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename="Menoessence-Client-Onboarding-Form.pdf"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'File nahi mili' }, { status: 404 });
  }
}