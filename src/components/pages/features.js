import React from "react";
import buyer from "../../assets/buyer.png";
import transporter from "../../assets/Delivery.png";
import farmer from "../../assets/Farmer.png";
import agent from "../../assets/agent.png";
const Services = () => {

  return (
      <div id="services" className="bg-gray-100 py-12 " >
          <section data-aos="zoom-in-down ">
                  <div className="my-4 py-4">
                      <h2 className="my-2 text-center text-3xl text-green-900 uppercase font-bold">Get Started</h2>
                      
                      <div className='flex justify-center'>
                          <div className='w-24 border-b-4 border-green-900'></div>
                      </div>
                      <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-green-900">Be part of Farmconnect and experience growth</h2>
                  </div>

                  <div  className="px-12 flex justify-center" data-aos="fade-down" data-aos-delay="600">
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                          
                          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                              <div className="m-2 text-justify text-sm">
                              <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={buyer} />
                                  <h2 className="font-semibold my-4 text-2xl text-center">Buyer</h2>
                                  <p className="text-md font-medium">
                                  As a buyer using farmconnect you'll be able to search for, and purchase a wide range of farm-fresh goods directly from local farmers and suppliers. With secure transactions and a variety of products available.
                                  </p>
                                  <div class="flex justify-center pt-4">
                                  <button class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">
Get started
</button>
</div>
                              </div>
                          </div>

                          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                              <div className="m-2 text-justify text-sm">
                              <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={transporter} />
                                  <h2 className="font-semibold my-4 text-2xl text-center">Transporter</h2>
                                  <p className="text-md font-medium">
                                      As a transporter you can find delivery requests from farmers and buyers, manage their routes, and provide essential logistics support to ensure a smooth exchange within the agricultural supply chain.
                                  </p>
                                  <div class="flex justify-center pt-4">
                                  <button class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">
Get started
</button>
</div>
                                  
                              </div>
                          </div>

                          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                              <div className="m-2 text-justify text-sm">
                                  <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={farmer} />
                                  <h2 className="font-semibold my-4 text-2xl text-center ">Farmer</h2>
                                  <p className="text-md font-medium">
                                  As a farmer you can utilize the  platform to showcase your produce, connect with potential buyers, and manage their sales. Farmers can list their products and arrange for efficient transportation.
                                  </p>
                                  <div class="flex justify-center pt-4">
                                  <button class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">
Get started
</button>
</div>
                              </div>
                          </div>
                          <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                              <div className="m-2 text-justify text-sm">
                                  <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={agent} />
                                  <h2 className="font-semibold my-4 text-2xl text-center ">Agent</h2>
                                  <p className="text-md font-medium">
                                  Agents promote the adoption of the FarmConnect system among farmers by highlighting its benefits and success stories within the community.
                                  </p>
                                  <div class="flex justify-center pt-4">
                                  <button class="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full ">
Get started
</button>
</div>
                              </div>
                          </div>

                                         
                      </div>
                  </div>
          </section>

   
      </div>
  )
}

export default Services;
