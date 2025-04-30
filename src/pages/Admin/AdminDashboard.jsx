import { useState } from 'react'

import FormInputTKD from '../FormInputTKD'
import TablePage from '../TablePage'
import AlokasiPage from '../AlokasiPage'

const ADMIN_API_KEY = import.meta.env.VITE_ADMIN_API_KEY

const AdminDashboard = () => {
  const [apiKeyInput, setApiKeyInput] = useState('')
  const [hasAccess, setHasAccess] = useState(false)
  const [activeTab, setActiveTab] = useState('form') // 'form' atau 'table'
  const [message, setMessage] = useState('')

  const handleAccessSubmit = e => {
    e.preventDefault()
    if (apiKeyInput === ADMIN_API_KEY) {
      setHasAccess(true)
    } else {
      setMessage('❌ Kode akses salah!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {!hasAccess ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold text-center mb-4">Masukkan Kode Akses Admin</h2>
          <form onSubmit={handleAccessSubmit} className="space-y-4">
            <input
              type="password"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
              placeholder="Kode Akses"
              className="w-full border border-gray-300 p-2 rounded-lg"
              required
            />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Masuk
            </button>
            {message && <p className="text-red-600 text-center">{message}</p>}
          </form>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto">
          {/* Navbar/Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'form' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
            >
              Input Data
            </button>
            <button
              onClick={() => setActiveTab('table')}
              className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'table' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
            >
              Lihat Tabel
            </button>
            <button
              onClick={() => setActiveTab('chart')}
              className={`px-4 py-2 rounded-md font-semibold ${activeTab === 'chart' ? 'bg-blue-600 text-white' : 'bg-white border'}`}
            >
              Grafik Alokasi
            </button>
          </div>


          {/* Halaman Aktif */}
          {activeTab === 'form' && <FormInputTKD hideAccessCheck={true} />}
          {activeTab === 'table' && <TablePage hideAccessCheck={true} />}
          {activeTab === 'chart' && <AlokasiPage />}

        </div>
      )}
    </div>
  )
}

export default AdminDashboard
