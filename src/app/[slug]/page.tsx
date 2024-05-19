"use client";

export default function SpacePage({ params }: { params: { slug: string } }) {
	return <div>My Post: {params.slug}</div>;
}
