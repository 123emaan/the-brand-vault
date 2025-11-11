import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Placeholder action. In real app send to API.
    setSent(true)
    setTimeout(()=>setSent(false), 3000)
  }

  return (
    <div style={{maxWidth:760, margin:'0 auto'}}>
      <div className="kicker pretitle">Get in touch</div>
      <h1>Contact Us</h1>
      <p className="muted">Have questions about a product, shipping, or wholesale orders? Send us an inquiry and we'll respond quickly.</p>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18, marginTop:14}}>
        <div className="card" style={{padding:18}}>
          <h3>Contact Info</h3>
          <p className="muted">Email: hello@thebrandvault.pk</p>
          <p className="muted">Phone: +92 300 0000000</p>
          <p className="muted">Karachi, Pakistan</p>
        </div>

        <form onSubmit={onSubmit} className="card" style={{padding:18}}>
          <label>Name</label>
          <input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          <label style={{marginTop:8}}>Email</label>
          <input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} type="email" required />
          <label style={{marginTop:8}}>Message</label>
          <textarea value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={5} required></textarea>

          <div style={{marginTop:12, display:'flex', gap:8}}>
            <button className="btn btn-primary" type="submit">Send Inquiry</button>
            <button type="button" className="btn btn-ghost" onClick={()=>setForm({name:'',email:'',message:''})}>Clear</button>
          </div>

          {sent && <div style={{marginTop:12, color:'green'}}>Message sent (demo)</div>}
        </form>
      </div>
    </div>
  )
}

export default Contact