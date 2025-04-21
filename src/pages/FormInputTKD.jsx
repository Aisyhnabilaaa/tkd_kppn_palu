import { useState } from 'react'
import axios from 'axios'

const ADMIN_API_KEY = import.meta.env.VITE_ADMIN_API_KEY

const FormInputTKD = ({ hideAccessCheck = false }) => {

  const [apiKeyInput, setApiKeyInput] = useState('')
  const [hasAccess, setHasAccess] = useState(false)
  const [formData, setFormData] = useState({
    jenis_tkd: '',
    semula: '',
    menjadi: '',
    pencadangan: '',
    pagu: '',
    realisasi: '',
    tahun: '',
    daerah: ''
  })
  const [message, setMessage] = useState('')

  const handleAccessSubmit = e => {
    e.preventDefault()
    if (apiKeyInput === ADMIN_API_KEY) {
      if (!hideAccessCheck) setHasAccess(true)
    } else {
      setMessage('❌ Kode akses salah!')
    }
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await axios.post('http://localhost:3000/tkd/create', formData, {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ADMIN_API_KEY
        }
      })

      setMessage('✅ Data berhasil disimpan!')
      setFormData({
        jenis_tkd: '',
        semula: '',
        menjadi: '',
        pencadangan: '',
        pagu: '',
        realisasi: '',
        tahun: '',
        daerah: ''
      })
    } catch (error) {
      console.error('❌ Gagal kirim data:', error)
      setMessage('❌ Terjadi kesalahan saat mengirim data')
    }
  }

  return (
    <div className='max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md'>
      {!hasAccess && !hideAccessCheck ? (
        <>
          <h2 className='text-xl font-bold mb-4 text-center'>
            Masukkan Kode Akses Admin
          </h2>
          <form onSubmit={handleAccessSubmit} className='space-y-4'>
            <input
              type='password'
              placeholder='Kode Akses'
              value={apiKeyInput}
              onChange={e => setApiKeyInput(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-lg'
              required
            />
            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
            >
              Masuk
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className='text-xl font-bold mb-4 text-center'>
            Form Input Data TKD
          </h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <Input
              name='jenis_tkd'
              value={formData.jenis_tkd}
              onChange={handleChange}
              placeholder='Jenis TKD'
            />
            <Input
              name='semula'
              value={formData.semula}
              onChange={handleChange}
              placeholder='Semula (Rp)'
              type='number'
            />
            <Input
              name='menjadi'
              value={formData.menjadi}
              onChange={handleChange}
              placeholder='Menjadi (Rp)'
              type='number'
            />
            <Input
              name='pencadangan'
              value={formData.pencadangan}
              onChange={handleChange}
              placeholder='Pencadangan (Rp)'
              type='number'
            />
            <Input
              name='pagu'
              value={formData.pagu}
              onChange={handleChange}
              placeholder='Pagu (Rp)'
              type='number'
            />
            <Input
              name='realisasi'
              value={formData.realisasi}
              onChange={handleChange}
              placeholder='Realisasi (Rp)'
              type='number'
            />
            <Input
              name='tahun'
              value={formData.tahun}
              onChange={handleChange}
              placeholder='Tahun'
              type='number'
            />

            <select
              name='daerah'
              value={formData.daerah}
              onChange={handleChange}
              className='w-full p-2 border border-gray-300 rounded-lg'
              required
            >
              <option value=''>Pilih Daerah</option>
              <option value='Sulawesi Tengah'>Sulawesi Tengah</option>
              <option value='Kota Palu'>Kota Palu</option>
              <option value='Parigi Moutong'>Parigi Moutong</option>
              <option value='Kabupaten Sigi'>Kabupaten Sigi</option>
              <option value='Kabupaten Donggala'>Kabupaten Donggala</option>
            </select>

            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
            >
              Simpan Data
            </button>
          </form>
        </>
      )}

      {message && <p className='mt-4 text-center'>{message}</p>}
    </div>
  )
}

const Input = ({ name, value, onChange, placeholder, type = 'text' }) => (
  <input
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    required
    className='w-full p-2 border border-gray-300 rounded-lg'
  />
)

export default FormInputTKD