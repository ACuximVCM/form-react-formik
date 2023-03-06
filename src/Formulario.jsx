import React, { useState } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Input, Radio, Form as AntForm } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Formulario = () => {
	// const [inputNombre, cambiarInputNombre] = useState('');
	// const [inputCorreo, cambiarInputCorreo] = useState('');

	// // Funcion que se encargara de validar los datos y enviar el formulario
	// const handleSubmit = (e) => {
	// 	e.preventDefault();

	// 	// Comprobamos validacion del formulario ...
	// 	// Si todo es correcto enviamos el formulario

	// 	console.log('Formulario Enviado!');
	// }

	// // Funcion que se encarga de cambiar el estado del inputNombre
	// const handleInputNombre = (e) => {
	// 	cambiarInputNombre(e.target.value);
	// }

	// // Funcion que se encarga de cambiar el estado del inputCorreo
	// const handleInputCorreo = (e) => {
	// 	cambiarInputCorreo(e.target.value);
	// }
	const [formularioEnviado, setFormularioEnviado] = useState(false);

	return (
		<>
			<Formik
				//establecemos valores por defecto
				initialValues={{
					nombre: '',
					correo: '',
					genero: '',
					comentarios: '',
				}}

				//con validate validamo sel formulario antes de ser enviado
				validate={(values) => {
					let errores = {};

					//validacion del nombre
					if (!values.nombre) {
						errores.nombre = 'Por favor ingresa un nombre'
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					//validacion del correo
					if (!values.correo) {
						errores.correo = 'Por favor ingresa un correo'
					} else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
						.test(values.correo)) {
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guiones bajos'
					}

					return errores;
				}}

				onSubmit={(values, { resetForm }) => {
					console.log(values);
					resetForm();
					setFormularioEnviado(true);
					setTimeout(() => {
						setFormularioEnviado(false);
					}, 3000);
				}}
			>
				{({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
					<Form className='formulario' onSubmit={handleSubmit}>
						<AntForm.Item
							label='Nombre'

						>
							<Input
								type="text"
								id='nombre'
								name='nombre'
								placeholder='Alexis Cuxim'
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<ErrorMessage name='nombre' component={() => (
								<div className="error">{errors.nombre}</div>
							)} />
						</AntForm.Item>


						<AntForm.Item label='Correo'>
							<Input
								type="text"
								id='correo'
								name='correo'
								placeholder='coreo@example.com'
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<ErrorMessage name='correo' component={() => (
								<div className="error">{errors.correo}</div>
							)} />
						</AntForm.Item>

						{/* <AntForm.Item
						label='Genero'
							name='genero' 
							value={values.genero}
							onChange={handleChange}
							onBlur={handleBlur}
						>
							<Radio.Group>
								<Radio value='' >Mujer</Radio>
								<Radio value=''>Hombre</Radio>
							</Radio.Group>
						</AntForm.Item> */}

						<AntForm.Item label='Comentarios'>
							<TextArea
								id='comentarios'
								name='comentarios'
								value={values.comentarios}
								onChange={handleChange}
								onBlur={handleBlur} 
							/>
						</AntForm.Item>
						<button type='submit'>Enviar</button>
						{formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}
					</Form>
				)}

				{/* {({ values, errors, touched, handleSubmit, handleChange, handleBlur }) => (
					<form className='formulario' onSubmit={handleSubmit}>
						<div>
							<label htmlFor="nombre">Nombre</label>
							<input
								type="text"
								id='nombre'
								name='nombre'
								placeholder='Alexis Cuxim'
								value={values.nombre}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
						</div>

						<div>
							<label htmlFor="correo">Correo</label>
							<input
								type="text"
								id='email'
								name='correo'
								placeholder='coreo@example.com'
								value={values.correo}
								onChange={handleChange}
								onBlur={handleBlur} 
							/>
							{touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
						</div>
						<button type='submit'>Enviar</button>
						{formularioEnviado && <p className='exito'>Formulario enviado con exito</p>}
					</form>
				)} */}
			</Formik>
		</>
	);
}

export default Formulario;
{/* <form onSubmit={handleSubmit} className="formulario">
	<div>
		<label htmlFor="nombre">Nombre</label>
		<input
			type="text"
			name="nombre"
			placeholder="Nombre"
			id="nombre"
			value={inputNombre}
			onChange={handleInputNombre}
		/>
	</div>

	<div>
		<label htmlFor="correo">Correo</label>
		<input
			type="text"
			name="correo"
			placeholder="Correo"
			id="correo"
			value={inputCorreo}
			onChange={handleInputCorreo}
		/>
	</div>

	<button type="submit">Enviar</button>
</form> */}