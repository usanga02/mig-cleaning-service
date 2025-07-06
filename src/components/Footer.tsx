import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">MIG</span>
              </div>
              <span className="text-xl font-bold">MIG Cleaning Services</span>
            </div>
            <p className="text-gray-300">
              Professional, eco-friendly cleaning services for homes,
              businesses, and institutions across Nigeria.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Household Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Post-Renovation Cleaning</li>
              <li>Specialized Cleaning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>0806 020 6107</li>
              <li>migcleaningserviices@gmail.com</li>
              <li>No. 4 Biskra Street, Wuse Zone 4</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} MIG Cleaning Services Nig. Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
