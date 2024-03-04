import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const DataTable = () => {
  const [sheetsData, setSheetsData] = useState([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const getSheetsData = async () => {
    try {
      const response = await axios.get(
        "https://script.google.com/macros/s/AKfycbzV-mVyuzQSgErw5TJe2lwYF08mj2U1BhJezqR4nb23_baWGjPOXSHN2Cd_6TmGusz2GA/exec"
      );
      const result = await response.data;
      setSheetsData(result?.data || []);
      toast.success("Data fetched successfully! 🎉");
    } catch (error) {
      toast.error(
        "Something went wrong while fetching data. Please try again later."
      );
    }
  };

  

  useEffect(() => {
    getSheetsData();
  }, []);

  return (
    <div>
      <div className="px-4 mx-auto">
        <div className="my-4 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">Filter Data</h1>
          <div className="max-w-3xl flex w-full items-center space-x-3">
            <div className="w-full md:w-1/2">
              <input
                type="text"
                className="py-3 px-4  block w-full bg-gray-100 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1 border"
                placeholder="Phone Number"
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <h1 className="font-medium">OR</h1>
            <div className="w-full md:w-1/2">
              <input
                type="text"
                className="py-3 px-4  block w-full bg-gray-100 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring-1 border"
                placeholder="Emai Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col border">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Email
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Phone
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Issue
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          IP
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          City
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Country
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          State
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Timezone
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          ISP
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          ISP Organization
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Platform
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Browser
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          User Agent
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {sheetsData
                        ?.filter(
                          (item) =>
                            item.Phone.toString().includes(phone) &&
                            item.Email.toString()
                              .toLowerCase()
                              .includes(email.toLowerCase())
                        )
                        ?.map((sheet, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800 ">
                            {sheet.Name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            {sheet.Email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.Phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.Issue}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.IP}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.City}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.Country}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.State}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.Timezone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.ISP}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet["ISP Organization"]}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.Platform}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet.Browser}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-800">
                            {sheet["User Agent"]}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
