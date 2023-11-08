import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import BasicLayout from "../layouts/BasicLayout";
import PayPalBtn from "../components/PaypalBtn";

function pagos() {
  const { width } = useWindowSize();
  const [planID, setPlanID] = useState("");
  const [quantity, setQuantity] = useState(null);


//Función para seleccionar un plan de suscripción
  const onOptionChange = (e) => {
    setQuantity(null);
    setPlanID(e.target.value);
  };

  //Funciones para setear la cantidad introducidad para APP y Tracking
  const onQuantityChange = (e) => {
    if (e.target.value > 1000) {
      setQuantity("1000");
    } else {
      setQuantity(e.target.value);
    }
  };
  const onTrackingChange = (e) => {
    setQuantity(e.target.value);
  };


  //Variables que calcula el monto a cobrar según la cantidad y costo de implementación

  const totalAppLight = quantity * 0.75 + 150;
  const totalAppLight2 = quantity * 0.72 + 150;
  const totalAppFull = quantity * 0.85 + 150;
  const totalAppFull2 = quantity * 0.78 + 150;
  const totalTracking = quantity * 29 + 195;
  const totalTracking2 = quantity * 26.1 + 195;
  const totalTracking3 = quantity * 23 + 195;

  //Función para crear la subscripcion
  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      plan_id: planID,
      quantity: quantity,
    });
  };


  //Función que muestra detalles de cualquier posible error de transacción que devuelva Paypal
  const paypalOnError = (err) => {
    console.log(err);
  };

  // Petición a la API de backend para almacenar los detalles de la transacción.
  const paypalOnApprove = (data, detail) => {
    console.log("Paypal approved");
    console.log(data.subscriptionID);
  };

  return (
    <BasicLayout active="pagos">
      {/* Versión del header */}

      {width > 1024 ? (
        <div
          className="flex h-fit justify-start align-middle  pt-40 pb-16 px-20 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] "
          style={{
            backgroundImage: `url(./assets/presentacion.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex z-10 items-baseline justify-start m-0 w-fit py-4 px-4 rounded-lg ">
            <h2 className="font-extrabold text-transparent text-6xl text-white  tracking-widest	">
              FORMAS DE PAGO
            </h2>
          </div>
        </div>
      ) : (

        //Versión responsive del header

        <div className="flex h-fit justify-center align-middle -mt-40 pt-40 pb-16 px-5 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] ">
          <div className="flex z-10  m-0 w-fit py-4 px-2 rounded-lg ">
            <h2 className="font-extrabold text-transparent text-2xl text-white text-center tracking-widest	">
              FORMAS DE PAGO
            </h2>
          </div>
        </div>
      )}
      {width > 1024 ? (
        // Versión de escritorio
        <div className="flex justify-around w-full mt-10 z-10">
          {/* Contenedor de suscipciones */}
          <div className="w-[30%] px-5 py-10 rounded-2xl bg-gradient-to-b from-[#1C5A8E] to-[#079BD8]">
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-white rounded-lg p-5">
                <img
                  className="h-24 p-2 mr-3 rounded-lg cursor-pointer "
                  src="https://firebasestorage.googleapis.com/v0/b/vikingoz-717ae.appspot.com/o/aplicaciones%2FVikingoz-APP.png?alt=media&token=ca18b537-8720-481c-a369-7bfda7c21068"
                  alt="logo"
                />
                <div>
                  <p className="font-bold text-sky-800">Vikingoz APP</p>
                  <p>Plan:</p>
                  <div className="flex justify-between">
                    <p className="mr-2">Light</p>
                    <input
                      onChange={onOptionChange}
                      type="radio"
                      value="P-6N301420TP415430AMTT45PY"
                      checked={planID === "P-6N301420TP415430AMTT45PY"}
                      className="mr-2"
                    />
                    <p className="mr-2">Full</p>
                    <input
                      onChange={onOptionChange}
                      type="radio"
                      value="P-7SY11011MW7464115MTT46MI"
                      checked={planID === "P-7SY11011MW7464115MTT46MI"}
                      className="mr-2"
                    />
                  </div>
                  <div>
                    {planID === "P-6N301420TP415430AMTT45PY" ? (
                      <div className="mt-1">
                        <label>Fincas:</label>
                        <input
                          onChange={onQuantityChange}
                          className=" w-full rounded-md pl-2 border border-gray-600"
                          type="number"
                          placeholder="Cantidad"
                          min="1"
                          max="1000"
                        />
                      </div>
                    ) : null}
                    {planID === "P-7SY11011MW7464115MTT46MI" ? (
                      <div className="mt-1">
                        <label>Fincas:</label>
                        <input
                          onChange={onQuantityChange}
                          className=" w-full rounded-md pl-2 border border-gray-600"
                          type="number"
                          placeholder="Cantidad"
                          min="1"
                          max="1000"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-5">
                <img
                  className="h-24 p-2 rounded-lg cursor-pointer "
                  src="https://firebasestorage.googleapis.com/v0/b/vikingoz-717ae.appspot.com/o/aplicaciones%2FVikingoz-TRACKING.png?alt=media&token=f6c92d10-deb4-4385-ae72-c597e3fd85bb"
                  alt="logo"
                />
                <div className="w-1/2">
                  <p className="font-bold text-sky-800">Vikingoz TRACKING</p>
                  <button
                    className="rounded-lg bg-[#1C5A8E] w-full py-1 mt-3"
                    onClick={() => setPlanID("P-9UV57141NU3843406MTT5AAA")}
                  >
                    <p className="text-white">Subscribirse</p>
                  </button>
                  {planID === "P-9UV57141NU3843406MTT5AAA" ? (
                    <div className="mt-1">
                      <label>Cuentas:</label>
                      <input
                        onChange={onTrackingChange}
                        className=" w-full rounded-md pl-2 border border-gray-600"
                        type="number"
                        placeholder="Cantidad"
                        min="1"
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between items-center bg-white rounded-lg p-5">
                <img
                  className="h-24 p-2 rounded-lg cursor-pointer"
                  src="https://firebasestorage.googleapis.com/v0/b/vikingoz-717ae.appspot.com/o/aplicaciones%2FVikingoz-RRHH.png?alt=media&token=2716a30a-48ac-4dbf-87c2-9d57b07bf036"
                  alt="logo"
                />
                <div>
                  <p className="font-bold text-sky-800">Vikingoz RRHH</p>
                  <p>Plan:</p>

                  <p className="text-xs">Colaboradores</p>
                  <div className="flex space-x-2 justify-between">
                    <div className="flex-col text-center">
                      <p>1-99</p>
                      <input
                        onChange={onOptionChange}
                        type="radio"
                        value="P-0XF23388BB720482UMTT5BJY"
                        checked={planID === "P-0XF23388BB720482UMTT5BJY"}
                      />
                    </div>
                    <div className="flex-col text-center">
                      <p>100-199</p>
                      <input
                        onChange={onOptionChange}
                        type="radio"
                        value="P-51V90090K6985430AMTT5BWQ"
                        checked={planID === "P-51V90090K6985430AMTT5BWQ"}
                      />
                    </div>
                    <div className="flex-col text-center">
                      <p>+200</p>
                      <input
                        onChange={onOptionChange}
                        type="radio"
                        value="P-9N12708444006981PMTT5CLY"
                        checked={planID === "P-9N12708444006981PMTT5CLY"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contenedor formulario de contacto */}
          <div className="w-[30%] px-10 py-10 rounded-2xl bg-gradient-to-b from-[#1C5A8E] to-[#079BD8]">
            <div>
              <div className="z-20 w-full flex-col items-center justify-center space-y-4 mb-4">
                <div className="z-20  flex flex-col items-center justify-center ">
                  <div className="w-full">
                    <p className="text-white mb-3 font-bold">NOMBRE</p>
                    <input
                      className="rounded-md py-3 w-full pl-4"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <div className="z-20  flex flex-col items-center justify-center">
                  <div className="w-full">
                    <p className="text-white mb-3 font-bold">CORREO</p>
                    <input
                      className="rounded-md w-full py-3 pl-4  "
                      type="email"
                      placeholder="Correo"
                    />
                  </div>
                </div>
                <div className="z-20  flex flex-col items-center justify-center">
                  <div className="w-full">
                    <p className="text-white mb-3 font-bold">TELÉFONO</p>
                    <input
                      className="rounded-md w-full py-3 pl-4"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
              </div>
              <div className="z-20  flex flex-col items-center justify-center mt-4">
                <div className="w-full">
                  <p className="text-white mb-3 font-bold">DIRECCIÓN</p>
                  <textarea className="rounded-lg w-full py-3 pl-4" />
                </div>
              </div>
            </div>
          </div>
          {/* Contenedor métodos de pago */}
          <div className="w-[30%] px-10 py-10 rounded-2xl bg-gradient-to-b from-[#1C5A8E] to-[#079BD8] flex flex-col justify-center">
            <div className="mb-5">
              <div className="bg-white p-4 h-full w-full rounded-lg items-center justify-center text-center space-y-10">
                <h2 className="text-sky-800 font-bold text-3xl">
                  Métodos de pago
                </h2>
                <div>
                  {planID === "" && (
                    <p>Por favor selecciona un plan de suscripción</p>
                  )}
                  {planID === "P-6N301420TP415430AMTT45PY" ? (
                    <div>
                      <div className="mb-5">
                        <p className=" font-bold">De 0 a 200 fincas = $0.75</p>
                        <p className=" font-bold">
                          De 201 a 1000 fincas = $0.72
                        </p>
                      </div>
                      {quantity === null ? null : (
                        <p className=" font-bold">
                          Fincas ={" "}
                          <span className="text-sky-800">{quantity}</span>
                        </p>
                      )}
                      {quantity >= 1000 ? (
                        <div className="border border-gray-600 p-3 rounded-lg my-3">
                          <p className=" font-bold">
                            La cantidad máxima de fincas es{" "}
                            <span className="text-sky-800">1000</span>. Si
                            deseas subscribir una cantidad mayor por favor
                            contáctanos.
                          </p>
                        </div>
                      ) : null}
                      <p className=" font-bold">
                        Suscripción mensual ={" "}
                        {quantity >= 201 && quantity <= 1000 && (
                          <span className="text-sky-800">
                            ${quantity * 0.72}{" "}
                          </span>
                        )}
                        {quantity <= 200 && (
                          <span className="text-sky-800">
                            ${quantity * 0.75}{" "}
                          </span>
                        )}
                      </p>
                      <p className=" font-bold">
                        Costo implementacion ={" "}
                        <span className="text-sky-800">$150</span>
                      </p>
                      <p className="mt-5 text-3xl font-bold">
                        Total =
                        {quantity <= 200 && (
                          <span className="text-sky-800">
                            ${totalAppLight.toFixed(2)}
                          </span>
                        )}
                        {quantity >= 201 && quantity <= 1000 && (
                          <span className="text-sky-800">
                            ${totalAppLight2.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                  ) : null}
                  {planID === "P-7SY11011MW7464115MTT46MI" ? (
                    <div>
                      <div className="mb-5">
                        <p className=" font-bold">De 0 a 200 fincas = $0.85</p>
                        <p className=" font-bold">
                          De 201 a 1000 fincas = $0.78
                        </p>
                      </div>
                      {quantity === null ? null : (
                        <p className=" font-bold">
                          Fincas ={" "}
                          <span className="text-sky-800">{quantity}</span>
                        </p>
                      )}
                      {quantity >= 1000 ? (
                        <div className="border border-gray-600 p-3 rounded-lg my-3">
                          <p className=" font-bold">
                            La cantidad máxima de fincas es{" "}
                            <span className="text-sky-800">1000</span>. Si
                            deseas subscribir una cantidad mayor por favor
                            contáctanos.
                          </p>
                        </div>
                      ) : null}
                      <p className=" font-bold">
                        Suscripción mensual ={" "}
                        {quantity >= 201 && quantity <= 1000 && (
                          <span className="text-sky-800">
                            ${quantity * 0.78}{" "}
                          </span>
                        )}
                        {quantity <= 200 && (
                          <span className="text-sky-800">
                            ${quantity * 0.85}{" "}
                          </span>
                        )}
                      </p>
                      <p className=" font-bold">
                        Costo implementacion ={" "}
                        <span className="text-sky-800">$150</span>
                      </p>
                      <p className="mt-5 text-3xl font-bold">
                        Total =
                        {quantity <= 200 && (
                          <span className="text-sky-800">
                            ${totalAppFull.toFixed(2)}
                          </span>
                        )}
                        {quantity >= 201 && quantity <= 1000 && (
                          <span className="text-sky-800">
                            ${totalAppFull2.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                  ) : null}

                  {planID === "P-9UV57141NU3843406MTT5AAA" ? (
                    <div>
                      <div className="mb-5">
                        <p className=" font-bold">De 1 a 9 cuentas = $29</p>
                        <p className=" font-bold">
                          De 10 a 25 cuentas = $26.10
                        </p>
                        <p className=" font-bold">Más de 25 cuentas = $23</p>
                      </div>
                      {quantity === null ? null : (
                        <p className=" font-bold">
                          Cuentas ={" "}
                          <span className="text-sky-800">{quantity}</span>
                        </p>
                      )}
                      <p className=" font-bold">
                        Suscripción mensual ={" "}
                        {quantity <= 9 && (
                          <span className="text-sky-800">
                            ${quantity * 29}{" "}
                          </span>
                        )}
                        {quantity >= 10 && quantity <= 25 && (
                          <span className="text-sky-800">
                            ${quantity * 26.1}{" "}
                          </span>
                        )}
                        {quantity > 25 && (
                          <span className="text-sky-800">
                            ${quantity * 23}{" "}
                          </span>
                        )}
                      </p>
                      <p className=" font-bold">
                        Costo implementacion ={" "}
                        <span className="text-sky-800">$195</span>
                      </p>
                      <p className="mt-5 text-3xl font-bold">
                        Total =
                        {quantity <= 9 && (
                          <span className="text-sky-800">
                            ${totalTracking.toFixed(2)}
                          </span>
                        )}
                        {quantity >= 10 && quantity <= 25 && (
                          <span className="text-sky-800">
                            ${totalTracking2.toFixed(2)}
                          </span>
                        )}
                        {quantity > 25 && (
                          <span className="text-sky-800">
                            ${totalTracking3.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>
                  ) : null}

                  {planID === "P-0XF23388BB720482UMTT5BJY" ? (
                    <div>
                      <p className=" font-bold">
                        Suscripción mensual ={" "}
                        <span className="text-sky-800">$99</span>
                      </p>
                      <p className=" font-bold">
                        Costo implementacion ={" "}
                        <span className="text-sky-800">$180</span>
                      </p>
                      <p className="mt-5 text-3xl font-bold">
                        Total ={" "}
                        <span className="text-sky-800">${99 + 180}</span>
                      </p>
                    </div>
                  ) : null}
                  {planID === "P-51V90090K6985430AMTT5BWQ" ? (
                    <div>
                      <p className=" font-bold">
                        Suscripción mensual ={" "}
                        <span className="text-sky-800">$165</span>
                      </p>
                      <p className=" font-bold">
                        Costo implementacion ={" "}
                        <span className="text-sky-800">$180</span>
                      </p>
                      <p className="mt-5 text-3xl font-bold">
                        Total ={" "}
                        <span className="text-sky-800">${165 + 180}</span>
                      </p>
                    </div>
                  ) : null}
                  {planID === "P-9N12708444006981PMTT5CLY" ? (
                    <div>
                      <p className=" font-bold">
                        Suscripción mensual ={" "}
                        <span className="text-sky-800">$225</span>
                      </p>
                      <p className=" font-bold">
                        Costo implementacion ={" "}
                        <span className="text-sky-800">$180</span>
                      </p>
                      <p className="mt-5 text-3xl font-bold">
                        Total ={" "}
                        <span className="text-sky-800">${225 + 180}</span>
                      </p>
                    </div>
                  ) : null}
                  {planID === "" ? null : (
                    <div className="mt-5">
                      <PayPalBtn
                        amount="150"
                        currency="USD"
                        createSubscription={createSubscription}
                        onApprove={paypalOnApprove}
                        catchError={paypalOnError}
                        onError={paypalOnError}
                        onCancel={paypalOnError}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Versión responsive
        <div className="flex flex-col px-5 items-center justify-around  mt-10">
           {/* Contenedor de suscipciones */}
          <div className=" px-5 py-5 rounded-2xl mb-5 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8]">
            <div className="mb-5">
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-white rounded-lg p-5">
                  <img
                    className="h-24 p-2 mr-3 rounded-lg cursor-pointer "
                    src="https://firebasestorage.googleapis.com/v0/b/vikingoz-717ae.appspot.com/o/aplicaciones%2FVikingoz-APP.png?alt=media&token=ca18b537-8720-481c-a369-7bfda7c21068"
                    alt="logo"
                  />
                  <div>
                    <p className="font-bold text-sky-800">Vikingoz APP</p>
                    <p>Plan:</p>
                    <div className="flex justify-between">
                      <p className="mr-2">Light</p>
                      <input
                        onChange={onOptionChange}
                        type="radio"
                        value="P-6N301420TP415430AMTT45PY"
                        checked={planID === "P-6N301420TP415430AMTT45PY"}
                        className="mr-2"
                      />
                      <p className="mr-2">Full</p>
                      <input
                        onChange={onOptionChange}
                        type="radio"
                        value="P-7SY11011MW7464115MTT46MI"
                        checked={planID === "P-7SY11011MW7464115MTT46MI"}
                        className="mr-2"
                      />
                    </div>
                    <div>
                      {planID === "P-6N301420TP415430AMTT45PY" ? (
                        <div className="mt-1">
                          <label>Fincas:</label>
                          <input
                            onChange={onQuantityChange}
                            className=" w-full rounded-md pl-2 border border-gray-600"
                            type="number"
                            placeholder="Cantidad"
                            min="1"
                            max="1000"
                          />
                        </div>
                      ) : null}
                      {planID === "P-7SY11011MW7464115MTT46MI" ? (
                        <div className="mt-1">
                          <label>Fincas:</label>
                          <input
                            onChange={onQuantityChange}
                            className=" w-full rounded-md pl-2 border border-gray-600"
                            type="number"
                            placeholder="Cantidad"
                            min="1"
                            max="1000"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-5">
                  <img
                    className="h-24 p-2 rounded-lg cursor-pointer "
                    src="https://firebasestorage.googleapis.com/v0/b/vikingoz-717ae.appspot.com/o/aplicaciones%2FVikingoz-TRACKING.png?alt=media&token=f6c92d10-deb4-4385-ae72-c597e3fd85bb"
                    alt="logo"
                  />
                  <div>
                    <p className="font-bold text-sky-800">Vikingoz TRACKING</p>
                    <button
                      className="rounded-lg bg-[#1C5A8E] w-full py-1 mt-3"
                      onClick={() => setPlanID("P-9UV57141NU3843406MTT5AAA")}
                    >
                      <p className="text-white">Subscribirse</p>
                    </button>
                    {planID === "P-9UV57141NU3843406MTT5AAA" ? (
                      <div className="mt-1">
                        <label>Cuentas:</label>
                        <input
                          onChange={onTrackingChange}
                          className=" w-full rounded-md pl-2 border border-gray-600"
                          type="number"
                          placeholder="Cantidad"
                          min="1"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white rounded-lg p-5">
                  <img
                    className="h-24 p-2 rounded-lg cursor-pointer"
                    src="https://firebasestorage.googleapis.com/v0/b/vikingoz-717ae.appspot.com/o/aplicaciones%2FVikingoz-RRHH.png?alt=media&token=2716a30a-48ac-4dbf-87c2-9d57b07bf036"
                    alt="logo"
                  />
                  <div>
                    <p className="font-bold text-sky-800">Vikingoz RRHH</p>
                    <p>Plan:</p>

                    <p className="text-xs">Colaboradores</p>
                    <div className="flex space-x-2 justify-between">
                      <div className="flex-col text-center">
                        <p>1-99</p>
                        <input
                          onChange={onOptionChange}
                          type="radio"
                          value="P-0XF23388BB720482UMTT5BJY"
                          checked={planID === "P-0XF23388BB720482UMTT5BJY"}
                        />
                      </div>
                      <div className="flex-col text-center">
                        <p>100-199</p>
                        <input
                          onChange={onOptionChange}
                          type="radio"
                          value="P-51V90090K6985430AMTT5BWQ"
                          checked={planID === "P-51V90090K6985430AMTT5BWQ"}
                        />
                      </div>
                      <div className="flex-col text-center">
                        <p>+200</p>
                        <input
                          onChange={onOptionChange}
                          type="radio"
                          value="P-9N12708444006981PMTT5CLY"
                          checked={planID === "P-9N12708444006981PMTT5CLY"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contenedor formulario de contacto */}
          <div className="w-full px-5 py-5 rounded-2xl mb-5 bg-gradient-to-b from-[#1C5A8E] to-[#079BD8]">
            <div>
              <div className="z-20 w-full flex-col items-center justify-center space-y-4 mb-4">
                <div className="z-20  flex flex-col items-center justify-center ">
                  <div className="w-full">
                    <p className="text-white mb-3 font-bold">NOMBRE</p>
                    <input
                      className="rounded-md py-3 w-full pl-4"
                      placeholder="Nombre"
                    />
                  </div>
                </div>
                <div className="z-20  flex flex-col items-center justify-center">
                  <div className="w-full">
                    <p className="text-white mb-3 font-bold">CORREO</p>
                    <input
                      className="rounded-md w-full py-3 pl-4  "
                      type="email"
                      placeholder="Correo"
                    />
                  </div>
                </div>
                <div className="z-20  flex flex-col items-center justify-center">
                  <div className="w-full">
                    <p className="text-white mb-3 font-bold">TELÉFONO</p>
                    <input
                      className="rounded-md w-full py-3 pl-4"
                      placeholder="Telefono"
                    />
                  </div>
                </div>
              </div>
              <div className="z-20  flex flex-col items-center justify-center mt-4">
                <div className="w-full">
                  <p className="text-white mb-3 font-bold">DIRECCIÓN</p>
                  <textarea className="rounded-lg w-full py-3 pl-4" />
                </div>
              </div>
            </div>
          </div>
          {/* Contenedor métodos de pago */}
          <div className="w-full px-5 py-5 rounded-2xl  bg-gradient-to-b from-[#1C5A8E] to-[#079BD8]">
            <div className="bg-white p-4 h-full w-full rounded-lg items-center justify-center text-center space-y-5">
              <h2 className="text-sky-800 font-bold text-3xl">
                Métodos de pago
              </h2>
              <div className="mb-5">
                {planID === "" && (
                  <p>Por favor selecciona un plan de suscripción</p>
                )}
                {planID === "P-6N301420TP415430AMTT45PY" ? (
                  <div>
                    <div className="mb-5">
                      <p className=" font-bold">De 0 a 200 fincas = $0.75</p>
                      <p className=" font-bold">De 201 a 1000 fincas = $0.72</p>
                    </div>
                    {quantity === null ? null : (
                      <p className=" font-bold">
                        Fincas ={" "}
                        <span className="text-sky-800">{quantity}</span>
                      </p>
                    )}
                    {quantity >= 1000 ? (
                      <div className="border border-gray-600 p-3 rounded-lg my-3">
                        <p className=" font-bold">
                          La cantidad máxima de fincas es{" "}
                          <span className="text-sky-800">1000</span>. Si deseas
                          subscribir una cantidad mayor por favor contáctanos.
                        </p>
                      </div>
                    ) : null}
                    <p className=" font-bold">
                      Suscripción mensual ={" "}
                      {quantity >= 201 && quantity <= 1000 && (
                        <span className="text-sky-800">
                          ${quantity * 0.72}{" "}
                        </span>
                      )}
                      {quantity <= 200 && (
                        <span className="text-sky-800">
                          ${quantity * 0.75}{" "}
                        </span>
                      )}
                    </p>
                    <p className=" font-bold">
                      Costo implementacion ={" "}
                      <span className="text-sky-800">$150</span>
                    </p>
                    <p className="mt-5 text-3xl font-bold">
                      Total =
                      {quantity <= 200 && (
                        <span className="text-sky-800">
                          ${totalAppLight.toFixed(2)}
                        </span>
                      )}
                      {quantity >= 201 && quantity <= 1000 && (
                        <span className="text-sky-800">
                          ${totalAppLight2.toFixed(2)}
                        </span>
                      )}
                    </p>
                  </div>
                ) : null}
                {planID === "P-7SY11011MW7464115MTT46MI" ? (
                  <div>
                    <div className="mb-5">
                      <p className=" font-bold">De 0 a 200 fincas = $0.85</p>
                      <p className=" font-bold">De 201 a 1000 fincas = $0.78</p>
                    </div>
                    {quantity === null ? null : (
                      <p className=" font-bold">
                        Fincas ={" "}
                        <span className="text-sky-800">{quantity}</span>
                      </p>
                    )}
                    {quantity >= 1000 ? (
                      <div className="border border-gray-600 p-3 rounded-lg my-3">
                        <p className=" font-bold">
                          La cantidad máxima de fincas es{" "}
                          <span className="text-sky-800">1000</span>. Si deseas
                          subscribir una cantidad mayor por favor contáctanos.
                        </p>
                      </div>
                    ) : null}
                    <p className=" font-bold">
                      Suscripción mensual ={" "}
                      {quantity >= 201 && quantity <= 1000 && (
                        <span className="text-sky-800">
                          ${quantity * 0.78}{" "}
                        </span>
                      )}
                      {quantity <= 200 && (
                        <span className="text-sky-800">
                          ${quantity * 0.85}{" "}
                        </span>
                      )}
                    </p>
                    <p className=" font-bold">
                      Costo implementacion ={" "}
                      <span className="text-sky-800">$150</span>
                    </p>
                    <p className="mt-5 text-3xl font-bold">
                      Total =
                      {quantity <= 200 && (
                        <span className="text-sky-800">
                          ${totalAppFull.toFixed(2)}
                        </span>
                      )}
                      {quantity >= 201 && quantity <= 1000 && (
                        <span className="text-sky-800">
                          ${totalAppFull2.toFixed(2)}
                        </span>
                      )}
                    </p>
                  </div>
                ) : null}

                {planID === "P-9UV57141NU3843406MTT5AAA" ? (
                  <div>
                    <div className="mb-5">
                      <p className=" font-bold">De 1 a 9 cuentas = $29</p>
                      <p className=" font-bold">De 10 a 25 cuentas = $26.10</p>
                      <p className=" font-bold">Más de 25 cuentas = $23</p>
                    </div>
                    {quantity === null ? null : (
                      <p className=" font-bold">
                        Cuentas ={" "}
                        <span className="text-sky-800">{quantity}</span>
                      </p>
                    )}
                    <p className=" font-bold">
                      Suscripción mensual ={" "}
                      {quantity <= 9 && (
                        <span className="text-sky-800">${quantity * 29} </span>
                      )}
                      {quantity >= 10 && quantity <= 25 && (
                        <span className="text-sky-800">
                          ${quantity * 26.1}{" "}
                        </span>
                      )}
                      {quantity > 25 && (
                        <span className="text-sky-800">${quantity * 23} </span>
                      )}
                    </p>
                    <p className=" font-bold">
                      Costo implementacion ={" "}
                      <span className="text-sky-800">$195</span>
                    </p>
                    <p className="mt-5 text-3xl font-bold">
                      Total =
                      {quantity <= 9 && (
                        <span className="text-sky-800">
                          ${totalTracking.toFixed(2)}
                        </span>
                      )}
                      {quantity >= 10 && quantity <= 25 && (
                        <span className="text-sky-800">
                          ${totalTracking2.toFixed(2)}
                        </span>
                      )}
                      {quantity > 25 && (
                        <span className="text-sky-800">
                          ${totalTracking3.toFixed(2)}
                        </span>
                      )}
                    </p>
                  </div>
                ) : null}

                {planID === "P-0XF23388BB720482UMTT5BJY" ? (
                  <div>
                    <p className=" font-bold">
                      Suscripción mensual ={" "}
                      <span className="text-sky-800">$99</span>
                    </p>
                    <p className=" font-bold">
                      Costo implementacion ={" "}
                      <span className="text-sky-800">$180</span>
                    </p>
                    <p className="mt-5 text-3xl font-bold">
                      Total = <span className="text-sky-800">${99 + 180}</span>
                    </p>
                  </div>
                ) : null}
                {planID === "P-51V90090K6985430AMTT5BWQ" ? (
                  <div>
                    <p className=" font-bold">
                      Suscripción mensual ={" "}
                      <span className="text-sky-800">$165</span>
                    </p>
                    <p className=" font-bold">
                      Costo implementacion ={" "}
                      <span className="text-sky-800">$180</span>
                    </p>
                    <p className="mt-5 text-3xl font-bold">
                      Total = <span className="text-sky-800">${165 + 180}</span>
                    </p>
                  </div>
                ) : null}
                {planID === "P-9N12708444006981PMTT5CLY" ? (
                  <div>
                    <p className=" font-bold">
                      Suscripción mensual ={" "}
                      <span className="text-sky-800">$225</span>
                    </p>
                    <p className=" font-bold">
                      Costo implementacion ={" "}
                      <span className="text-sky-800">$180</span>
                    </p>
                    <p className="mt-5 text-3xl font-bold">
                      Total = <span className="text-sky-800">${225 + 180}</span>
                    </p>
                  </div>
                ) : null}
                {planID === "" ? null : (
                  <div className="mt-5">
                    <PayPalBtn
                      amount="150"
                      currency="USD"
                      createSubscription={createSubscription}
                      onApprove={paypalOnApprove}
                      catchError={paypalOnError}
                      onError={paypalOnError}
                      onCancel={paypalOnError}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </BasicLayout>
  );
}

export default pagos;
