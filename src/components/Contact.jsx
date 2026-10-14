import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../i18n/useLang'
import { contact, profile } from '../data/content'
import { ArrowRightIcon, LinkedInIcon, MailIcon } from './Icons'

// Messages are sent with formsubmit.co (free, no account). The first message
// triggers a confirmation email to activate the address, see README.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${profile.email}`

function Field({ id, label, type = 'text', textarea = false, required = false }) {
  const cls =
    'peer w-full rounded-none border-b border-cream/35 bg-transparent pb-3 pt-6 text-base text-cream outline-none transition-colors placeholder-transparent focus:border-cream'
  return (
    <label htmlFor={id} className="relative block">
      {textarea ? (
        <textarea id={id} name={id} rows={4} required={required} placeholder={label} className={`${cls} resize-none`} />
      ) : (
        <input id={id} name={id} type={type} required={required} placeholder={label} className={cls} />
      )}
      {/* Floating label: big when empty, small once filled or focused */}
      <span className="pointer-events-none absolute left-0 top-0 font-mono text-[11px] uppercase tracking-wider text-cream/60 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:font-sans peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-0 peer-focus:font-mono peer-focus:text-[11px] peer-focus:uppercase peer-focus:tracking-wider">
        {label}
      </span>
    </label>
  )
}

export default function Contact() {
  const { tr } = useLang()
  const sectionRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | missing

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const bigWordY = useTransform(scrollYProgress, [0, 1], ['-15%', '25%'])

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')?.toString().trim()
    const email = data.get('email')?.toString().trim()
    const message = data.get('message')?.toString().trim()
    const company = data.get('company')?.toString().trim()

    if (!name || !email || !message) {
      setStatus('missing')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company: company || '-',
          message,
          _subject: `Portfolio : message de ${name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const result = await res.json()
      if (String(result.success) === 'true') {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const feedback = {
    sent: { text: tr(contact.sent), cls: 'text-matcha' },
    error: { text: tr(contact.error), cls: 'text-cream' },
    missing: { text: tr(contact.missing), cls: 'text-cream' },
  }[status]

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden border-t border-cream/10 bg-ink pt-32 md:pt-48">
      {/* Huge word in the background, moves slower than the page */}
      <motion.p
        style={{ y: bigWordY }}
        className="pointer-events-none absolute inset-x-0 top-0 select-none text-center font-display text-[24vw] font-bold italic leading-none tracking-tighter text-cream/[0.07] md:text-[20vw]"
        aria-hidden="true"
      >
        {contact.bigWord}
      </motion.p>

      <motion.div
        className="relative ml-auto w-full bg-forest px-6 py-12 md:w-[85%] md:px-14 md:py-16 lg:w-[75%]"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-matcha">{tr(contact.label)}</p>
            <h2 className="font-display text-4xl md:text-5xl">{tr(contact.formTitle)}</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/70">{tr(contact.intro)}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="grid gap-8 md:grid-cols-2 md:gap-x-14">
          <div className="space-y-6">
            <Field id="name" label={tr(contact.fields.name)} required />
            <Field id="email" type="email" label={tr(contact.fields.email)} required />
            <Field id="company" label={tr(contact.fields.company)} />
          </div>
          <div className="flex flex-col">
            <Field id="message" label={tr(contact.fields.message)} textarea required />

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className={`text-sm ${feedback?.cls ?? ''}`} role="status">
                {feedback?.text}
              </p>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-3 font-medium text-ink transition-colors hover:bg-matcha disabled:opacity-60"
              >
                {status === 'sending' ? tr(contact.sending) : tr(contact.send)}
                <ArrowRightIcon width={16} height={16} className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </form>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-cream/15 pt-6 text-sm">
          <span className="eyebrow text-cream/50">{tr(contact.direct)}</span>
          <a href={`mailto:${profile.email}`} className="link-grow inline-flex items-center gap-2">
            <MailIcon width={16} height={16} />
            {profile.email}
          </a>
          <a href={profile.phoneHref} className="link-grow">
            {profile.phone}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-grow inline-flex items-center gap-2">
            <LinkedInIcon width={16} height={16} />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}
