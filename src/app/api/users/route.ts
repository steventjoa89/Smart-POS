// app/api/users/route.ts
import { NextRequest, NextResponse } from "next/server";
import AppDataSource, { initializeDatabase } from "@/lib/db";
import { User } from "@/entities/user.entity";
// import { initializeDatabase } from '../../../lib/db';
// import AppDataSource from '../../../lib/db';

export async function GET() {
  await initializeDatabase();

  const users = await AppDataSource.getRepository(User).find();
  return NextResponse.json(users);
}

/*
export async function POST(request: Request) {
  await initializeDatabase();

  const { name, email } = await request.json();
  const user = AppDataSource.getRepository(User).create({ name, email });
  await AppDataSource.getRepository(User).save(user);
  
  return NextResponse.json(user, { status: 201 });
}

export async function PUT(request: Request) {
  await initializeDatabase();

  const { id, name, email } = await request.json();
  const user = await AppDataSource.getRepository(User).findOneBy({ id });
  
  if (!user) {
    return NextResponse.json({ message: 'User not found' }, { status: 404 });
  }
  
  user.name = name;
  user.email = email;
  await AppDataSource.getRepository(User).save(user);
  
  return NextResponse.json(user);
}


*/

export async function DELETE(request: NextRequest) {
  await initializeDatabase();

  const { id } = await request.json();
  const result = await AppDataSource.getRepository(User).delete(id);

  if (result.affected === 0) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ status: "OK" });
  // return NextResponse.json(null, { status: 204 });
}
