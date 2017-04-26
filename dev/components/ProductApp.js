import React from 'react';

class ProductApp extends React.Component {
	render() {
		return (
			<div 
				className='product'>
				<div
					className='product__img'>
					<img src='img/mac.jpg' />
				</div>
				<div 
					className='product__desc'>
					<h3>Ноутбук Apple MacBook Pro Retina 15 дюймов (MJLQ2UA/A)</h3>
					<p>Технические характеристики:</p>
					<p><b>Процессор:</b> Четырехъядерный Intel Core i7 (2.2 ГГц) <br/>
					<b>Диагональ:</b> 15.4 (2880x1800) <br/>
					<b>Оперативная память:</b> 16 ГБ <br/>
					<b>Общая характеристика:</b> Экран 15.4 IPS (2880x1800) Retina LED, глянцевый / Intel Core i7 (2.2 ГГц) / RAM 16 ГБ / SSD 256 ГБ / Intel Iris Pro Graphics / без ОД / Wi-Fi / Bluetooth / веб-камера / OS X Yosemite / 2.04 кг
					</p>
					<h2>Цена: 68 799 грн</h2>
				</div>
			</div>
		)
	}
}

export default  ProductApp;