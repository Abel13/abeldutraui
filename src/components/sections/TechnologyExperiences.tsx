"use client";
import React, { useState } from "react";

type ExperiencePeriod = {
  start: string;
  end: string | "present";
};

type Technology = {
  id: string;
  name: string;
  color: string;
  periods: ExperiencePeriod[];
};

interface TechPeriod {
  start: string;
  end: string;
}

const TechTimeline: React.FC = () => {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  const technologies: Technology[] = [
    {
      id: "reactnative",
      name: "React Native",
      color: "bg-green-500",
      periods: [
        { start: "11/2017", end: "01/2021" },
        { start: "11/2021", end: "present" },
      ],
    },
    {
      id: "typescript",
      name: "TypeScript",
      color: "bg-blue-600",
      periods: [{ start: "11/2017", end: "present" }],
    },
    {
      id: "javascript",
      name: "JavaScript",
      color: "bg-yellow-500",
      periods: [{ start: "11/2017", end: "present" }],
    },
    {
      id: "expo",
      name: "Expo",
      color: "bg-emerald-500",
      periods: [
        { start: "07/2019", end: "01/2021" },
        { start: "11/2021", end: "present" },
      ],
    },
    {
      id: "nextjs",
      name: "Next JS",
      color: "bg-black",
      periods: [{ start: "06/2022", end: "present" }],
    },
    {
      id: "redux",
      name: "Redux",
      color: "bg-emerald-500",
      periods: [
        { start: "07/2019", end: "01/2021" },
        { start: "11/2021", end: "present" },
      ],
    },
    {
      id: "flutter",
      name: "Flutter",
      color: "bg-blue-500",
      periods: [{ start: "03/2021", end: "12/2021" }],
    },
    {
      id: "csharp",
      name: "C#",
      color: "bg-purple-500",
      periods: [
        { start: "01/2011", end: "03/2013" },
        { start: "11/2017", end: "08/2019" },
      ],
    },
    {
      id: "vbnet",
      name: "Visual Basic .NET",
      color: "bg-fuchsia-700",
      periods: [{ start: "04/2011", end: "12/2012" }],
    },
    {
      id: "vb6",
      name: "Visual Basic 6",
      color: "bg-fuchsia-700",
      periods: [{ start: "04/2011", end: "12/2012" }],
    },
    {
      id: "supabase",
      name: "Supabase",
      color: "bg-green-600",
      periods: [{ start: "07/2023", end: "present" }],
    },
  ];

  const years = [
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2026",
  ];

  const getActiveTech = () => {
    if (!activeTech) return null;
    return technologies.find((tech) => tech.id === activeTech) || null;
  };

  const isActive = (techId: string) => activeTech === techId;

  const toggleTech = (techId: string) => {
    setActiveTech(activeTech === techId ? null : techId);
  };

  const formatPeriod = (period: ExperiencePeriod) => {
    return `${period.start} - ${
      period.end === "present" ? "Present" : period.end
    }`;
  };

  const calculateTotalDuration = (periods: TechPeriod[]): string => {
    let totalMonths = 0;

    for (const period of periods) {
      const [startMonth, startYear] = period.start.split("/").map(Number);
      let endMonth: number, endYear: number;

      if (period.end === "present") {
        const now = new Date();
        endMonth = now.getMonth() + 1;
        endYear = now.getFullYear();
      } else {
        [endMonth, endYear] = period.end.split("/").map(Number);
      }

      totalMonths += (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
      return `${months} ${months === 1 ? "month" : "months"}`;
    } else if (months === 0) {
      return `${years} ${years === 1 ? "year" : "years"}`;
    } else {
      return `${years} ${years === 1 ? "year" : "years"} and ${months} ${
        months === 1 ? "month" : "months"
      }`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technology Experience Timeline
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive timeline showcasing my professional experience with
            various technologies
          </p>
        </div>

        <div className="p-6 mb-12">
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                onClick={() => toggleTech(tech.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(tech.id)
                    ? `${tech.color} text-white shadow-md`
                    : "bg-gray-200 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tech.name}
              </button>
            ))}
          </div>

          {activeTech && (
            <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {getActiveTech()?.name} Experience
              </h3>
              <div className="flex flex-wrap gap-2">
                {getActiveTech()?.periods.map((period, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                  >
                    {formatPeriod(period)}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 to-gray-800"></div>

            <div className="space-y-12 pl-6">
              {technologies
                .filter((filter) => {
                  if (!activeTech) return true;

                  return activeTech === filter.id;
                })
                .map((tech) => (
                  <div key={tech.id} className="relative">
                    {/* Dot */}
                    <div
                      className={`absolute w-5 h-5 rounded-full ${tech.color} border-4 border-white shadow transform -translate-x-1/2 -translate-y-1/2 left-0 top-1`}
                    ></div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pl-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {tech.name}
                        </h3>
                        <span className="text-xs font-bold text-gray-900">
                          {calculateTotalDuration(tech.periods)}
                        </span>
                        <div className="flex flex-col flex-wrap gap-2 mt-2 w-fit">
                          {tech.periods.map((period, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700"
                            >
                              {formatPeriod(period)}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 min-w-[300px]">
                        <div className="flex items-end h-16">
                          {years.map((year) => {
                            // Check if this year is within any experience period
                            const isInPeriod = tech.periods.some((period) => {
                              const startYear = parseInt(
                                period.start.split("/")[1],
                              );
                              const endYear =
                                period.end === "present"
                                  ? new Date().getFullYear()
                                  : parseInt(period.end.split("/")[1]);
                              return (
                                parseInt(year) >= startYear &&
                                parseInt(year) <= endYear
                              );
                            });

                            return (
                              <div
                                key={year}
                                className={`h-4 flex-1 mx-px rounded-sm ${
                                  isInPeriod ? tech.color : "bg-gray-200"
                                }`}
                                title={`${tech.name} experience in ${year}`}
                              ></div>
                            );
                          })}
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          {years.map((year, index) => (
                            <span
                              key={year}
                              className={`${
                                index % 2 === 0 ? "block" : "hidden md:block"
                              }`}
                            >
                              {year}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Summary of Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.id}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${tech.color}`}></div>
                  <h3 className="font-bold text-gray-900">{tech.name}</h3>
                </div>
                <div className="space-y-2">
                  {tech.periods.map((period, index) => (
                    <div
                      key={index}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <span className="inline-block w-2 h-2 rounded-full bg-gray-300 mr-2"></span>
                      {formatPeriod(period)}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            Click on technology tags to highlight specific experience periods
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechTimeline;
