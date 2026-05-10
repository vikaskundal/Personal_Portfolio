import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { Project } from '@/lib/models/Project';

export async function GET() {
  try {
    if (!clientPromise) {
      return NextResponse.json({ success: true, data: [] });
    }
    const client = await clientPromise;
    const db = client.db('portfolio');
    const projects = await db.collection<Project>('projects').find({}).sort({ featured: -1, createdAt: -1 }).toArray();
    
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!clientPromise) {
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 500 }
      );
    }
    const body = await request.json();
    const project: Project = {
      ...body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const client = await clientPromise;
    const db = client.db('portfolio');
    const result = await db.collection<Project>('projects').insertOne(project);

    return NextResponse.json({ success: true, data: { ...project, _id: result.insertedId } }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
