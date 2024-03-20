'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  const apiCall = async () => {
    const url = '/api/python';
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response;
      console.log(data);
       alert('Status fetched successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Data deletion failed. Check the console for details.');
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className={`mb-3 text-2xl font-semibold`} onClick={apiCall}> Hello World</button>

    </main>
  )
}
