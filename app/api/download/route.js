import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  // Aapke public folder mein rakhi PDF ka exact path
  const filePath = path.join(process.cwd(), 'public', 'Menoessence Client Onboarding Form.pdf');

  try {
    // File ko server se read karna
    const fileBuffer = await fs.readFile(filePath);

    // Browser ko strictly "Download" command (attachment) dena
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Menoessence-Client-Onboarding-Form.pdf"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'File nahi mili' }, { status: 404 });
  }
}