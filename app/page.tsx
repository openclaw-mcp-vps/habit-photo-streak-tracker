export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col gap-6 text-center">
        <div className="inline-block mx-auto bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-4 py-1 rounded-full border border-[#58a6ff]/30">
          AI-Powered Habit Verification
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Photo-verify your habits.<br />
          <span className="text-[#58a6ff]">Never fake a streak again.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto">
          Snap a photo of your completed habit. Our AI validates it's real, tracks your streak, and sends accountability reminders so you stay consistent.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-base"
          >
            Start for $8/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors text-base"
          >
            Learn more
          </a>
        </div>
        <div className="flex justify-center gap-8 mt-4 text-sm text-[#8b949e]">
          <span>✓ AI photo verification</span>
          <span>✓ Streak tracking</span>
          <span>✓ Push reminders</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="flex flex-col gap-6 items-center">
        <h2 className="text-2xl font-bold text-white">Simple pricing</h2>
        <div className="w-full max-w-sm border border-[#58a6ff]/40 rounded-2xl p-8 flex flex-col gap-6 bg-[#161b22]">
          <div className="flex flex-col gap-1">
            <span className="text-[#58a6ff] text-sm font-medium uppercase tracking-wide">Pro Plan</span>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold text-white">$8</span>
              <span className="text-[#8b949e] mb-1">/month</span>
            </div>
            <p className="text-[#8b949e] text-sm">Everything you need to build unbreakable habits.</p>
          </div>
          <ul className="flex flex-col gap-3 text-sm">
            {[
              "Unlimited habit photo uploads",
              "OpenAI Vision AI verification",
              "Streak counter & history",
              "Daily push notifications",
              "Accountability group sharing",
              "Progress analytics dashboard"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-center text-base"
          >
            Get started — $8/mo
          </a>
          <p className="text-xs text-[#8b949e] text-center">Cancel anytime. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">Frequently asked questions</h2>
        <div className="flex flex-col gap-4">
          <div className="border border-[#30363d] rounded-xl p-6 flex flex-col gap-2 bg-[#161b22]">
            <h3 className="font-semibold text-white">How does AI photo verification work?</h3>
            <p className="text-[#8b949e] text-sm">You upload a photo of your completed habit — a gym selfie, a meal, a book page. Our OpenAI Vision integration analyzes the image to confirm it matches your habit goal, preventing fake check-ins and keeping your streak honest.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 flex flex-col gap-2 bg-[#161b22]">
            <h3 className="font-semibold text-white">What kinds of habits can I track?</h3>
            <p className="text-[#8b949e] text-sm">Any habit with a visual component: workouts, healthy meals, meditation setups, reading, journaling, cold showers, and more. You define the habit and the AI learns what valid proof looks like for it.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6 flex flex-col gap-2 bg-[#161b22]">
            <h3 className="font-semibold text-white">Can I use this with an accountability group?</h3>
            <p className="text-[#8b949e] text-sm">Yes. You can share your verified streak with a group, invite friends or coaching clients, and see each other's progress. Accountability groups dramatically increase habit completion rates.</p>
          </div>
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} HabitSnap. Built for people who keep their word.
      </footer>
    </main>
  );
}
