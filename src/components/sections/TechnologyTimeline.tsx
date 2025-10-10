"use client";
import React, { useState } from "react";

interface TechPeriod {
  start: string;
  end: string;
}

interface Technology {
  name: string;
  periods: TechPeriod[];
  color: string;
  bgColor: string;
  icon: string;
}

const technologies: Technology[] = [
  {
    name: "Flutter",
    periods: [{ start: "03/2021", end: "12/2021" }],
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    icon: "📱",
  },
  {
    name: "C#",
    periods: [
      { start: "01/2011", end: "03/2013" },
      { start: "11/2017", end: "08/2019" },
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    icon: "⚡",
  },
  {
    name: "React Native",
    periods: [
      { start: "11/2017", end: "03/2021" },
      { start: "12/2021", end: "Atualmente" },
    ],
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    icon: "⚛️",
  },
  {
    name: "JavaScript",
    periods: [{ start: "06/2015", end: "Atualmente" }],
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    icon: "🟨",
  },
  {
    name: "Python",
    periods: [
      { start: "09/2019", end: "05/2020" },
      { start: "01/2022", end: "Atualmente" },
    ],
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: "🐍",
  },
];

const formatPeriod = (period: TechPeriod): string => {
  return `${period.start} - ${period.end}`;
};

const calculateDuration = (period: TechPeriod): string => {
  const [startMonth, startYear] = period.start.split("/").map(Number);
  let endMonth: number, endYear: number;

  if (period.end === "Atualmente") {
    const now = new Date();
    endMonth = now.getMonth() + 1;
    endYear = now.getFullYear();
  } else {
    [endMonth, endYear] = period.end.split("/").map(Number);
  }

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0) {
    return `${months} ${months === 1 ? "mês" : "meses"}`;
  } else if (months === 0) {
    return `${years} ${years === 1 ? "ano" : "anos"}`;
  } else {
    return `${years} ${years === 1 ? "ano" : "anos"} e ${months} ${
      months === 1 ? "mês" : "meses"
    }`;
  }
};

export default function TechnologyTimeline() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Experiência Tecnológica
          </h1>
          <p className="text-lg text-gray-600">
            Timeline das tecnologias que trabalhei ao longo da minha carreira
          </p>
        </div>

        <div className="relative">
          {/* Linha vertical principal */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400"></div>

          <div className="space-y-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="relative flex items-start"
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Ponto na timeline */}
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${
                    hoveredTech === tech.name ? "scale-110" : "scale-100"
                  } ${tech.bgColor}`}
                >
                  <span className="text-2xl">{tech.icon}</span>
                </div>

                {/* Card da tecnologia */}
                <div
                  className={`ml-8 flex-1 transition-all duration-300 transform ${
                    hoveredTech === tech.name
                      ? "translate-x-2 scale-105"
                      : "translate-x-0 scale-100"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl font-bold ${tech.color}`}>
                        {tech.name}
                      </h3>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${tech.bgColor} ${tech.color}`}
                      >
                        {tech.periods.length} período
                        {tech.periods.length > 1 ? "s" : ""}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {tech.periods.map((period, periodIndex) => (
                        <div
                          key={periodIndex}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 rounded-full ${tech.bgColor}`}
                            ></div>
                            <span className="font-medium text-gray-800">
                              {formatPeriod(period)}
                            </span>
                          </div>
                          <span className="text-sm text-gray-600 font-medium">
                            {calculateDuration(period)}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Total de experiência */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-600">
                          Experiência total:
                        </span>
                        <span className={`font-bold ${tech.color}`}>
                          {tech.periods.reduce((total, period) => {
                            const [startMonth, startYear] = period.start
                              .split("/")
                              .map(Number);
                            let endMonth: number, endYear: number;

                            if (period.end === "Atualmente") {
                              const now = new Date();
                              endMonth = now.getMonth() + 1;
                              endYear = now.getFullYear();
                            } else {
                              [endMonth, endYear] = period.end
                                .split("/")
                                .map(Number);
                            }

                            const months =
                              (endYear - startYear) * 12 +
                              (endMonth - startMonth) +
                              1;
                            return total + months;
                          }, 0) >= 12
                            ? `${Math.floor(
                                tech.periods.reduce((total, period) => {
                                  const [startMonth, startYear] = period.start
                                    .split("/")
                                    .map(Number);
                                  let endMonth: number, endYear: number;

                                  if (period.end === "Atualmente") {
                                    const now = new Date();
                                    endMonth = now.getMonth() + 1;
                                    endYear = now.getFullYear();
                                  } else {
                                    [endMonth, endYear] = period.end
                                      .split("/")
                                      .map(Number);
                                  }

                                  const months =
                                    (endYear - startYear) * 12 +
                                    (endMonth - startMonth) +
                                    1;
                                  return total + months;
                                }, 0) / 12
                              )} anos`
                            : `${tech.periods.reduce((total, period) => {
                                const [startMonth, startYear] = period.start
                                  .split("/")
                                  .map(Number);
                                let endMonth: number, endYear: number;

                                if (period.end === "Atualmente") {
                                  const now = new Date();
                                  endMonth = now.getMonth() + 1;
                                  endYear = now.getFullYear();
                                } else {
                                  [endMonth, endYear] = period.end
                                    .split("/")
                                    .map(Number);
                                }

                                const months =
                                  (endYear - startYear) * 12 +
                                  (endMonth - startMonth) +
                                  1;
                                return total + months;
                              }, 0)} meses`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas gerais */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Resumo da Experiência
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {technologies.length}
              </div>
              <div className="text-sm text-gray-600">Tecnologias Dominadas</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {technologies.reduce(
                  (total, tech) => total + tech.periods.length,
                  0
                )}
              </div>
              <div className="text-sm text-gray-600">Períodos de Trabalho</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Date().getFullYear() - 2011}+
              </div>
              <div className="text-sm text-gray-600">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
