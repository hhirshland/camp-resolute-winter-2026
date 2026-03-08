/* Red divider line — matches the resolute.vc horizontal rule */
function RedDivider() {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 4"
        fill="none"
        vectorEffect="non-scaling-stroke"
        className="w-full"
      >
        <path
          d="M0 2H1440"
          stroke="#EF4423"
          strokeWidth="4"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function InfoRow({
  title,
  description,
  cta,
  ctaHref,
}: {
  title: string;
  description: string;
  cta?: string;
  ctaHref?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-[40px] py-[24px] border-b-2 border-gray-300 last:border-b-0">
      <div className="min-w-0 flex-1">
        <h4 className="text-[20px] md:text-[24px] leading-[28px] md:leading-[32px] font-bold text-dark-blue">
          {title}
        </h4>
        <p className="mt-[8px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-light text-dark-blue">
          {description}
        </p>
      </div>
      {cta && ctaHref && (
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="resolute-link shrink-0 text-[14px] md:text-[16px]"
        >
          {cta} →
        </a>
      )}
    </div>
  );
}

const AGENDA = [
  {
    day: "Day 1 — Monday, March 9",
    items: [
      { time: "", activity: "Arrivals throughout day", location: "", note: "" },
      {
        time: "3:00 PM",
        activity: "Hotel Check-in available",
        location: "Peruvian",
        note: "Check-in begins at 3:00 PM but showers and luggage holding is available earlier",
      },
      { time: "6:00 PM", activity: "Meetup", location: "Peruvian Lobby", note: "" },
      {
        time: "6:30 PM",
        activity: "Group Dinner",
        location: "Peruvian Dining Room",
        note: "Seating time is 6:30 PM sharp",
      },
    ],
  },
  {
    day: "Day 2 — Tuesday, March 10",
    items: [
      {
        time: "7:30 AM",
        activity: "Breakfast Opens",
        location: "Peruvian Dining Room",
        note: "Available 7:30–9:00 AM",
      },
      {
        time: "9:15 AM",
        activity: "Ski / Snowboard / Leisure",
        location: "Alta / Snowbird",
        note: "Alta: Lifts start rolling at 9:15 AM / Snowbird: Lifts start rolling at 9:00 AM",
      },
      {
        time: "12:00 PM",
        activity: "Lunch (Optional and on own)",
        location: "Peruvian, Alta, or Snowbird",
        note: "*The Peruvian includes Lunch buffet from 12:00–1:30 PM or grab a group to eat at the mtn",
      },
      {
        time: "1:00–4:00 PM",
        activity: "Ski / Snowboard / Leisure",
        location: "Alta / Snowbird",
        note: "Alta: Standard lifts close at 4:30 PM / Snowbird: Standard lifts close at 4:00 PM",
      },
      {
        time: "4:00–6:30 PM",
        activity: "Apres Ski Hangout",
        location: "Peruvian Hot Tub / Alf Engen Room",
        note: "Optional",
      },
      {
        time: "6:30 PM",
        activity: "Group Dinner",
        location: "Peruvian Dining Room",
        note: "Seating time is 6:30 PM sharp",
      },
      {
        time: "8:00 PM",
        activity: "Founder Hangout",
        location: "Alf Engen Room",
        note: "Optional",
      },
    ],
  },
  {
    day: "Day 3 — Wednesday, March 11",
    items: [
      {
        time: "7:30 AM",
        activity: "Breakfast Opens",
        location: "Peruvian Dining Room",
        note: "Available 7:30–9:00 AM",
      },
      {
        time: "8:00 AM",
        activity: "Fresh Tracks Ski Experience at Alta",
        location: "Alta",
        note: (
          <>
            Optional for those who RSVPd — Meet in the Peruvian lobby at 8:00 AM to head over together, or meet at the Wildcat chair by 8:25 AM. Fresh Tracks allows you to ski with guides, starting 1 hour before the lifts open to the public to get fresh snow, and then ski with guides the rest of the morning. For intermediate and advanced skiers.{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1MfHnnOqdma2TcqoTX78GA-5PHF14vEZZhkbavidKo5w/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="resolute-link not-italic"
            >
              RSVP needed
            </a>
          </>
        ),
      },
      {
        time: "8:00 AM",
        activity: "Advanced Snowboard Guide Experience at Snowbird",
        location: "Snowbird",
        note: (
          <>
            Optional for those who RSVPd — Meet at the Peruvian front desk at 8:00 AM to request the maintenance shuttle to Snowbird. The experience runs 9:00 AM–12:00 PM but meets at 8:50 AM at Snowbird.{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1MfHnnOqdma2TcqoTX78GA-5PHF14vEZZhkbavidKo5w/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="resolute-link not-italic"
            >
              RSVP needed
            </a>
          </>
        ),
      },
      {
        time: "9:15 AM",
        activity: "Ski / Snowboard / Leisure",
        location: "Alta / Snowbird",
        note: "Alta: Lifts start rolling at 9:15 AM / Snowbird: Lifts start rolling at 9:00 AM",
      },
      {
        time: "12:00 PM",
        activity: "Mid-Mountain Lunch (Skiers)",
        location: "Collins Grill",
        note: (
          <>
            Optional —{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1MfHnnOqdma2TcqoTX78GA-5PHF14vEZZhkbavidKo5w/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className="resolute-link not-italic"
            >
              RSVP required
            </a>
          </>
        ),
      },
      {
        time: "12:00 PM",
        activity: "Group Lunch (Snowboarders)",
        location: "SeventyOne at Snowbird",
        note: "No reservation needed — snowboarders meet up for a group lunch at SeventyOne at Snowbird",
      },
      {
        time: "1:00–4:00 PM",
        activity: "Ski / Snowboard / Leisure",
        location: "Alta / Snowbird",
        note: "Alta: Standard lifts close at 4:30 PM / Snowbird: Standard lifts close at 4:00 PM",
      },
      {
        time: "4:00–6:30 PM",
        activity: "Apres Ski Hangout",
        location: "Peruvian Hot Tub / Alf Engen Room",
        note: "Optional",
      },
      {
        time: "6:30 PM",
        activity: "Group Dinner",
        location: "Peruvian Dining Room",
        note: "Seating time is 6:30 PM sharp",
      },
      {
        time: "8:00 PM",
        activity: "Founder Hangout",
        location: "Alf Engen Room",
        note: "Optional",
      },
    ],
  },
  {
    day: "Day 4 — Thursday, March 12",
    items: [
      {
        time: "7:30 AM",
        activity: "Breakfast Opens",
        location: "Peruvian Dining Room",
        note: "Available 7:30–9:00 AM",
      },
      {
        time: "",
        activity: "Departures all day",
        location: "",
        note: "",
      },
    ],
  },
];

const ATTENDEES: {
  name: string;
  company: string;
  phone?: string;
  email?: string;
}[] = [
  {
    name: "Raanan Bar-Cohen",
    company: "Resolute",
    phone: "917-678-7517",
    email: "raanan@resolute.vc",
  },
  {
    name: "Gabriel Botelho",
    company: "Coverage Cat",
    phone: "773-354-3222",
    email: "gabriel@coveragecat.com",
  },
  {
    name: "Logan Burchett",
    company: "Forecastr",
    phone: "859-553-1491",
    email: "logan@forecastr.co",
  },
  {
    name: "Dan Burkhart",
    company: "Vixel",
    phone: "415-218-3488",
    email: "dan@vixel.com",
  },
  {
    name: "Asaf Fadida",
    company: "Darwin",
    phone: "+972 54-228-7277",
    email: "asaf@darwingov.com",
  },
  {
    name: "Ben Fuxbruner",
    company: "Kimba",
    phone: "+972 50-422-1100",
    email: "ben@kimba.ai",
  },
  {
    name: "Arik Gefen",
    company: "Nebo Health",
    phone: "+972 54-800-6099",
    email: "arik@nebo.health",
  },
  {
    name: "Nadaz Grossinger",
    company: "Elio",
    phone: "650-862-5142",
    email: "ngrossinger@eliolabs.com",
  },
  {
    name: "Anurag Gupta",
    company: "Tembo Health",
    phone: "734-678-3170",
    email: "anurag@tembo.health",
  },
  {
    name: "Erik Gustavson",
    company: "SGNL",
    phone: "703-216-3881",
    email: "erik@sgnl.ai",
  },
  {
    name: "Ari Haber",
    company: "Fenwick",
    phone: "510-610-8884",
    email: "ahaber@fenwick.com",
  },
  {
    name: "Tomas Halgas",
    company: "Sutro",
    phone: "+44 7508 297792",
    email: "tom@sutro.xyz",
  },
  {
    name: "Cynthia Hess",
    company: "Fenwick",
    phone: "415-730-2121",
    email: "CHess@fenwick.com",
  },
  {
    name: "Michael Hirshland",
    company: "Resolute",
    phone: "781-789-3868",
    email: "mike@resolute.vc",
  },
  {
    name: "Vic Hu",
    company: "Brev",
    phone: "512-994-9755",
    email: "vic@brev.io",
  },
  {
    name: "Scott Kriz",
    company: "SGNL",
    phone: "310-487-4321",
    email: "kriz@sgnl.ai",
  },
  {
    name: "Michael Kurson",
    company: "First Touch",
    phone: "617-959-1381",
    email: "michael@firsttouch.ai",
  },
  {
    name: "Lee Lior-Hoffmann",
    company: "Elio",
    phone: "646-369-8951",
    email: "lee@eliolabs.com",
  },
  {
    name: "Chris Pitchford",
    company: "Brev",
    phone: "425-245-4510",
    email: "chris@brev.io",
  },
  {
    name: "Kurt Schrader",
    company: "Shortcut",
    phone: "212-203-1314",
    email: "kurt@shortcut.com",
  },
  {
    name: "Paul Walborsky",
    company: "OpenWater",
    phone: "617-921-8800",
    email: "pwalborsky@gmail.com",
  },
  {
    name: "Ory Zloczower",
    company: "Nebo Health",
    phone: "469-996-5095",
    email: "ory@nebo.health",
  },
];

export default function Home() {
  return (
    <div id="top" className="bg-tan">
      {/* Hero */}
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/winterfest-hero.png')" }}
      >
        <div className="absolute inset-0 bg-dark-blue/60" />
        <div className="relative mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] pt-[80px] md:pt-[120px] pb-[64px] md:pb-[80px]">
          <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px] !text-tan">
            Winterfest 2026
          </h2>
          <p className="mt-[16px] text-[16px] md:text-[24px] leading-[22px] md:leading-[32px] font-light text-tan/90">
            Alta &amp; Snowbird&ensp;·&ensp;March 9–12, 2026
          </p>
          <p className="mt-[16px] text-[24px] md:text-[36px] xl:text-[48px] leading-[30px] md:leading-[42px] xl:leading-[56px] font-semibold text-tan">
            Powder. People. Perspective.
          </p>
          <p className="mt-[12px] text-[14px] md:text-[20px] leading-[20px] md:leading-[28px] font-light text-tan/80">
            Two days on the mountain, three nights with fellow founders at Alta Peruvian Lodge
          </p>
          <div className="mt-[32px] flex flex-wrap gap-[16px]">
            <a href="#agenda" className="resolute-btn">
              View Agenda
            </a>
            <a href="#attendees" className="resolute-btn-outlined !border-tan !text-tan hover:!bg-tan/20">
              See Attendees
            </a>
          </div>
        </div>
      </div>

      <RedDivider />

      {/* Agenda */}
      <section
        id="agenda"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[16px] md:gap-x-[40px]">
          <div className="col-span-4 md:col-span-8 mb-[32px] md:mb-[48px]">
            <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px]">
              Agenda
            </h2>
          </div>
        </div>
        <div className="space-y-[40px] md:space-y-[48px]">
          {AGENDA.map((day) => (
            <div key={day.day}>
              <h3 className="text-[20px] md:text-[28px] leading-[28px] md:leading-[36px] mb-[16px]">
                {day.day}
              </h3>
              <div className="border-t-2 border-gray-300">
                {day.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 py-[12px] sm:flex-row sm:items-baseline sm:gap-[24px] border-b-2 border-gray-300 last:border-b-0"
                  >
                    <span className="w-[120px] shrink-0 text-[14px] md:text-[16px] font-medium text-dark-blue/50">
                      {item.time || "—"}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[16px] md:text-[18px] font-medium text-dark-blue">
                        {item.activity}
                      </span>
                      {item.location && (
                        <span className="ml-[8px] text-[14px] md:text-[16px] text-red font-semibold">
                          @ {item.location}
                        </span>
                      )}
                      {item.note && (
                        <p className="mt-[4px] text-[14px] text-dark-blue/60 italic font-light">
                          {item.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <RedDivider />

      {/* Attendees */}
      <section
        id="attendees"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[16px] md:gap-x-[40px] mb-[32px] md:mb-[48px]">
          <div className="col-span-4 md:col-span-6">
            <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px]">
              Attendees
            </h2>
          </div>
          <p className="col-span-4 md:col-span-6 mt-[16px] md:mt-0 text-[16px] md:text-[24px] leading-[22px] md:leading-[32px] font-light text-dark-blue">
            Founders and friends joining the trip. Reach out, connect, and plan
            to ski together.
          </p>
        </div>
        <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {ATTENDEES.map((attendee, i) => (
            <div
              key={i}
              className="rounded-[var(--border-radius)] bg-white/40 p-[20px] md:p-[24px] border-2 border-dark-blue/10 transition-all hover:border-red"
            >
              <p className="text-[16px] md:text-[18px] font-medium text-dark-blue">
                {attendee.name}
              </p>
              <p className="mt-[4px] text-[14px] text-red font-semibold">
                {attendee.company}
              </p>
              <div className="mt-[12px] flex flex-wrap gap-x-[16px] gap-y-[4px]">
                {attendee.phone && (
                  <a
                    href={`tel:${attendee.phone}`}
                    className="text-[13px] text-dark-blue/60 underline underline-offset-2 decoration-dark-blue/20 transition-colors hover:text-dark-blue hover:decoration-dark-blue"
                  >
                    {attendee.phone}
                  </a>
                )}
                {attendee.email && (
                  <a
                    href={`mailto:${attendee.email}`}
                    className="text-[13px] text-dark-blue/60 underline underline-offset-2 decoration-dark-blue/20 transition-colors hover:text-dark-blue hover:decoration-dark-blue"
                  >
                    {attendee.email}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <RedDivider />

      {/* Transportation */}
      <section
        id="transportation"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-[16px] md:gap-x-[40px] mb-[32px] md:mb-[48px]">
          <div className="col-span-4 md:col-span-8">
            <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px]">
              Transportation from SLC Airport
            </h2>
          </div>
          <p className="col-span-4 mt-[16px] text-[16px] md:text-[24px] leading-[22px] md:leading-[32px] font-light text-dark-blue">
            The lodge is about 45 minutes from Salt Lake City International
            Airport.
          </p>
        </div>
        <div>
          <InfoRow
            title="Alta/Snowbird Shuttle"
            description="RECOMMENDED: Shared (or private) shuttle service — convenient and reliable."
            cta="Book Online"
            ctaHref="https://www.altasnowbirdshuttle.com/reservation.php?a=MQ=="
          />
          <InfoRow
            title="UTA Ski Bus (Route 994)"
            description="Budget option: $5 per ride from Historic Sandy Station. Runs every 30 minutes from 6:00 AM–7:00 PM. Less convenient but very affordable!"
            cta="View Schedule"
            ctaHref="https://www.rideuta.com/Rider-Tools/Schedules-and-Maps/994-Historic-Sandy-Station-to-Snowbird-Alta"
          />
        </div>

        {/* Getting around Alta */}
        <div className="mt-[48px] md:mt-[64px]">
          <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px] mb-[16px] md:mb-[24px]">
            Getting Around Alta
          </h2>
          <div>
            <InfoRow
              title="Alta Peruvian Shuttle"
              description="Free shuttle service between the lodge and Alta lifts."
            />
            <InfoRow
              title="Alta Resort Shuttle"
              description="Free shuttle running between Alta and Snowbird throughout the day."
              cta="Call 801-301-0122"
              ctaHref="tel:801-301-0122"
            />
            <InfoRow
              title="Skiing from Alta to Snowbird"
              description="You can ski directly from Alta to Snowbird (and back) provided that both sides have operating lifts. From Alta, take Sugarloaf lift to the top where the interconnect gates are located. You must buy a combined pass in person at Alta/Snowbird or through your Ikon app for Ikon pass holders."
            />
          </div>
        </div>
      </section>

      <RedDivider />

      {/* Lift Tickets & Passes */}
      <section
        id="tickets"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px] mb-[16px]">
          Lift Tickets &amp; Passes
        </h2>
        <p className="text-[16px] md:text-[24px] leading-[22px] md:leading-[32px] font-light text-dark-blue mb-[32px] md:mb-[48px]">
          Purchase in advance for the best prices — up to 15% savings at both
          resorts.
        </p>
        <div>
          <InfoRow
            title="Alta Ski Area"
            description="Alta is on the Ikon pass; if you don't have one, you can purchase single or multi-day lift tickets in advance for best prices (up to 15% savings)."
            cta="Buy Alta Tickets"
            ctaHref="https://www.alta.com/tickets-and-passes"
          />
          <InfoRow
            title="Snowbird Resort"
            description="Snowbird is also an Ikon mtn; if you don't have that pass, advance purchase of single or multi-day lift tickets saves 15%. They also offer 'Fast Tracks' to skip the lift line."
            cta="Buy Snowbird Tickets"
            ctaHref="https://www.snowbird.com/tickets-passes/tickets/"
          />
        </div>
        <div className="mt-[32px] rounded-[var(--border-radius)] bg-dark-blue text-tan p-[24px] md:p-[32px]">
          <h4 className="text-[18px] md:text-[22px] font-bold !text-red">
            Important: Snowboarders Read This
          </h4>
          <p className="mt-[12px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-light text-tan/90">
            Alta is a skiers-only mountain. Snowboarders are not allowed at
            Alta. Snowboarders must go to Snowbird!
          </p>
          <p className="mt-[12px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-light text-tan/70">
            <strong className="text-tan font-semibold">
              Getting to Snowbird from Peruvian Lodge:
            </strong>{" "}
            The Alta Peruvian Lodge offers a free shuttle to Snowbird for
            snowboarders. Free Alta area shuttles also run throughout the day
            between Alta and Snowbird.
          </p>
          <p className="mt-[12px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-light text-tan/70">
            <strong className="text-tan font-semibold">
              Returning from Snowbird with a dual pass:
            </strong>{" "}
            Snowboarders with a combined Alta/Snowbird pass ARE allowed to
            snowboard back from Snowbird to the Peruvian Lodge on a specific
            Alta trail — but you cannot ride any Alta lifts. Ask the Peruvian
            front desk for instructions and directions if needed.
          </p>
        </div>
        <div className="mt-[32px] rounded-[var(--border-radius)] bg-dark-blue text-tan p-[24px] md:p-[32px]">
          <h4 className="text-[18px] md:text-[22px] font-bold !text-red">
            Combined Pass — Ski Between Both Mountains
          </h4>
          <p className="mt-[12px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-light text-tan/80">
            You can ski directly from Alta to Snowbird (and back) provided that
            both sides have operating lifts. From Alta, take Sugarloaf lift to
            the top where the interconnect gates are located. You must buy a
            combined pass in person at Alta/Snowbird or through your Ikon app
            for Ikon pass holders.
          </p>
        </div>
        
      </section>

      <RedDivider />

      {/* Equipment & Rentals */}
      <section
        id="equipment"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px] mb-[16px]">
          Equipment &amp; Rentals
        </h2>
        <p className="text-[16px] md:text-[24px] leading-[22px] md:leading-[32px] font-light text-dark-blue mb-[32px] md:mb-[48px]">
          Ship your gear ahead, rent at the lodge, or reserve equipment at the
          resorts.
        </p>
        <div>
          <InfoRow
            title="Ship Your Skis"
            description="Recommended by the Peruvian: Ship your skis/gear directly to the lodge — they arrive before you do!"
            cta="ShipSkis.com"
            ctaHref="https://www.shipskis.com/alta-peruvian-lodge?utm_source=altaperuvianhotel&utm_medium=referral&utm_campaign=website&utm_content=website"
          />
          <InfoRow
            title="Ski Rentals at Peruvian"
            description="The Peruvian has on-site ski rentals. No advance reservation typically needed."
          />
          <InfoRow
            title="Alta Ski Shop Rentals"
            description="Alta has full-service ski shops at Albion and Wildcat base areas. Online reservations available (pickup day-of only). Advance booking recommended for weekends."
            cta="Reserve Online"
            ctaHref="https://shop.alta.com/rentals"
          />
          <InfoRow
            title="Snowboard Rentals"
            description="Snowboarders: Get rentals at Snowbird (Christy Sports, Snowbird Center, or Cliff Sports). Advance reservation gets 20% discount."
            cta="Snowbird Rentals"
            ctaHref="https://pass.snowbird.com/l/rentals/p/rental-demo-equipment"
          />
        </div>
      </section>

      <RedDivider />

      {/* Lessons */}
      <section
        id="lessons"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px] mb-[32px] md:mb-[48px]">
          Lessons
        </h2>
        <div>
          <InfoRow
            title="Alta — Alf Engen Ski School"
            description="One of the best ski schools in the nation! Offers private and group lessons. Call 801-799-2271 to book."
            cta="Alta Ski School"
            ctaHref="https://www.alta.com/ski-school"
          />
          <InfoRow
            title="Snowbird Mountain School"
            description="Ski and snowboard lessons for all ages and abilities. Kids camps, adult lessons, private instruction. Advance reservations recommended."
            cta="Snowbird School"
            ctaHref="https://www.snowbird.com/guiding-lessons/programs/"
          />
        </div>
      </section>

      <RedDivider />

      {/* Trail Maps */}
      <section
        id="maps"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px] mb-[16px]">
          Trail Maps &amp; Mountain Info
        </h2>
        <p className="text-[16px] md:text-[24px] leading-[22px] md:leading-[32px] font-light text-dark-blue mb-[32px] md:mb-[48px]">
          Over 5,000 combined acres of legendary terrain.
        </p>
        <div>
          <InfoRow
            title="Alta Trail Map"
            description="2,614 acres of legendary powder skiing. Skiers only!"
            cta="View Map"
            ctaHref="https://www.alta.com/plan-your-trip#maps"
          />
          <InfoRow
            title="Snowbird Trail Map"
            description="2,500 acres with terrain for skiers and snowboarders."
            cta="View Map"
            ctaHref="https://www.snowbird.com/the-mountain/maps/winter-trail-map/"
          />
        </div>
        <div className="mt-[32px] rounded-[var(--border-radius)] bg-dark-blue text-tan p-[24px] md:p-[32px]">
          <h4 className="text-[18px] md:text-[22px] font-bold !text-red">
            Ski Between Mountains
          </h4>
          <p className="mt-[12px] text-[16px] md:text-[18px] leading-[22px] md:leading-[26px] font-light text-tan/80">
            From Alta, take Sugarloaf lift to the top, then ski to Germania
            Pass. From there, you can access Snowbird&apos;s Mineral Basin. Reverse
            route to return to Alta. (Combined pass required — see above!)
          </p>
        </div>
      </section>

      <RedDivider />

      {/* Quick Tips */}
      <section
        id="tips"
        className="scroll-mt-[60px] mx-auto max-w-[var(--max-width)] px-[27px] md:px-[40px] lg:px-[67px] py-[48px] md:py-[72px]"
      >
        <h2 className="text-[24px] md:text-[36px] xl:text-[56px] leading-[30px] md:leading-[40px] xl:leading-[64px] mb-[32px] md:mb-[48px]">
          Quick Tips
        </h2>
        <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Weather",
              desc: "Alta averages 500+ inches of snow annually. Dress in layers!",
            },
            {
              title: "Parking",
              desc: "Parking reservations required at Alta on weekends/holidays ($10–25). Or take the free shuttles!",
            },
            {
              title: "Altitude",
              desc: "Base elevation ~8,500 ft. Drink lots of water to avoid altitude sickness.",
            },
            {
              title: "Free Shuttles",
              desc: "Free shuttles run throughout Alta and to Snowbird all day. Use them!",
            },
            {
              title: "Peruvian Lodge",
              desc: "All-inclusive meals at the Peruvian. Hot tubs, pool, and game room on-site.",
            },
            {
              title: "Ski Together!",
              desc: "Meet up with other founders of similar ability to ski/ride together.",
            },
          ].map((tip) => (
            <div
              key={tip.title}
              className="rounded-[var(--border-radius)] bg-white/40 p-[20px] md:p-[24px] border-2 border-dark-blue/10"
            >
              <h4 className="text-[16px] md:text-[18px] font-bold text-dark-blue">
                {tip.title}
              </h4>
              <p className="mt-[8px] text-[14px] md:text-[16px] leading-[20px] md:leading-[22px] font-light text-dark-blue/70">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
