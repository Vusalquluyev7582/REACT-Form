import React from 'react'
import { Link } from 'react-router-dom'

function Form({ form, handleCange }) {

    return (
        <div>
            <form>
                <input type="text" name="ad" value={form.ad} onChange={handleCange} placeholder='Adınızı və Soyadınızı daxil edin' />

                <select name="şəhər" value={form.şəhər} onChange={handleCange}>
                    <option value="">Yaşadığınız şəhəri seçin</option>
                    <option value="Bakı">Bakı</option>
                    <option value="Sumqayıt">Sumqayıt</option>
                </select>

                <input type="date" name="təvəllüd" value={form.təvəllüd} onChange={handleCange} />

                <input type="color" name="rəng" value={form.rəng} onChange={handleCange} />

                <textarea cols={27} rows={5} name="address" value={form.address} onChange={handleCange} placeholder='Addressinizi daxil edin'></textarea>

                <Link to="/məlumatlar"><button>Göndər</button></Link>
            </form>
        </div>
    )

}

export default Form