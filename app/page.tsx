import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sahel">
      <Head>
        <title>رزومه حامد رهیده</title>
      </Head>

      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-12 text-center shadow-lg rounded-b-lg">
        <div className="flex flex-col items-center">
          <img
            src="/profile.jpg"
            alt="حامد رهیده"
            className="w-48 h-48 rounded-full border-4 border-white shadow-xl transform hover:scale-105 transition-all duration-300"
          />
          <h1 className="text-5xl font-bold mt-6">حامد رهیده</h1>
          <p className="text-xl mt-2">توسعه‌دهنده وب | برنامه‌نویس فول استک</p>
        </div>
      </header>

      <main className="p-8 max-w-5xl mx-auto" dir="rtl">
        <section className="mb-10">
          <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2 mb-4">
            مهارت‌ها
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {[
              "#C",
              "Asp.net core",
              "SQL Server",
              "Html",
              "CSS",
              "React.js",
              "Next.js",
              "Tailwind CSS",
              "JavaScript",
              "+ Network",
              "Help Desk",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800 p-6 rounded-lg text-center shadow-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300"
              >
                <p className="text-xl">{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2 mb-4">
            تجربیات کاری
          </h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-400">
              کارشناس نرم افزار و کارمند انفورماتیک شرکت صنعت کاشی کاژه
            </h3>
            <p className="text-sm text-gray-400">
              1395-اکنون | کارشناس نرم افزار | کارمند انفورماتیک شرکت صنعت
              کاشی کاژه
            </p>
            </div>
            <br/>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">

            <h3 className="text-2xl font-bold text-blue-400">
              پشتیبان نرم افزار و سخت افزار کامپیوتر شرکت کامپیوتری عصر ارتباط
            </h3>
            <p className="text-sm text-gray-400">
              1393-1392 | کارشناس نرم افزار | کارمند انفورماتیک شرکت صنعت
              کاشی کاژه
            </p>
          </div>
          <br/>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-blue-400">
            توسعه‌دهنده وب فول استک | 2021 - اکنون
            </h3>
            <p className="mt-4">
              برنامه نویسی به زبان‌های C#, ASP.net core و توسعه وب‌سایت‌های
              پویا با React و Next.js.
            </p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2 mb-4">
            پروژه‌ها
          </h2>
          {[{
            title: "نرم افزار تحت شبکه PM",
            desc: "پیاده‌سازی با C#, SQL Server نرم افزار مراقبت و نگهداری تجهیزات و ماشین‌آلات شرکت صنعت کاشی کاژه"
          }, {
            title: "نرم افزار اتوماسیون ورود و خروج شرکت",
            desc: "پیاده‌سازی با C# و SQL Server"
          }, {
            title: "سایت شرکت صنعت کاشی کاژه",
            desc: "توسعه سامانه تحت وب شرکت صنعت کاشی کاژه با ASP.net core و بانک SQL Server"
          }].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg shadow-xl mt-6 hover:bg-blue-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4">{project.desc}</p>
            </div>
          ))}
          <a
            href="https://hamrah2020.ir"
            className="block text-center text-blue-400 hover:underline mt-6 text-lg font-semibold"
          >
            مشاهده پروژه‌ها
          </a>
        </section>

        <section>
          <h2 className="text-3xl font-semibold border-b-4 border-blue-500 pb-2 mb-4">
            تماس با من
          </h2>
          <form className="mt-6 bg-gray-800 p-8 rounded-lg shadow-xl">
            <input
              type="text"
              placeholder="نام شما"
              className="border p-4 w-full mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <input
              type="email"
              placeholder="ایمیل شما"
              className="border p-4 w-full mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            />
            <textarea
              placeholder="پیام شما"
              className="border p-4 w-full mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            ></textarea>
            <button className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full font-semibold hover:bg-blue-500 transition-all duration-200">
              ارسال پیام
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-800 text-center p-6 mt-8 text-gray-400">
        <p>© 2025 تمامی حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}
