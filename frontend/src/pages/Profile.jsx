import React, { useState } from 'react';
import { FiUser, FiShield, FiActivity, FiBell, FiMail, FiLock } from 'react-icons/fi';
import useClient from "../hooks/useClient";

const HostingerAccountPanel = () => {
  const [activeTab, setActiveTab] = useState('account-info');
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const { user, loading, error } = useClient(1);

  if (loading) {
    return <div className="p-6">در حال بارگذاری اطلاعات...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">خطا در دریافت اطلاعات کاربر</div>;
  }

  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-sm mt-12">
      <div className="flex-1">
        {activeTab === 'account-info' && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">Account Information</h2>
              <p className="text-gray-600">Profile - Account Information</p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-gray-800">Personal information</h3>
              <p className="text-sm text-gray-500 mb-4">
                The information provided below will reflect on your invoices
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Name</p>
                    <p className="font-medium">{user?.firstname} {user?.lastname}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">{user?.address1 || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone number</p>
                    <p className="font-medium">{user?.phonenumber || '-'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="font-medium">{user?.companyname || '-'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-800">Account settings</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-gray-500">
                    <FiMail />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{user?.email || '-'}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1 text-gray-500">
                    <FiLock />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">Add password</p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600 mb-2">
                        Message two-factor authentication
                      </p>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          checked={twoFactorAuth}
                          onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                          className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          {twoFactorAuth ? 'Enabled' : 'Disabled'}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab !== 'account-info' && (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">{`${activeTab.replace('-', ' ')} content will be displayed here`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HostingerAccountPanel;
