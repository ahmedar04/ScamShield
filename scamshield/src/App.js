import React, { useState } from 'react';
import { Shield, AlertTriangle, BarChart2, CheckCircle, Eye, Settings, Bell, LogOut, Search, Users, FileText, MessageSquare, Link, Mail, Calendar, Clock, Filter, Upload, UploadCloud, ArrowUpRight, Download, RefreshCw, Smartphone, PieChart, TrendingUp, Inbox } from 'lucide-react';

// Dashboard Page Component
const DashboardContent = () => {
  // Mock data for scam detection stats
  const stats = {
    scamsDetected: 247,
    riskyMessages: 32,
    safeMessages: 815,
    protectionScore: 94
  };
  
  // Mock data for recent alerts
  const recentAlerts = [
    { id: 1, type: 'Email', source: 'support@bankofamerica-secure.com', riskLevel: 'High', time: '10:23 AM', details: 'Phishing attempt detected: Links to suspicious login portal' },
    { id: 2, type: 'Browser', source: 'www.amazen-shipping-update.com', riskLevel: 'High', time: 'Yesterday', details: 'Fake shopping site: Attempting to collect payment information' },
    { id: 3, type: 'Call', source: 'VoIP Unknown Caller', riskLevel: 'Medium', time: 'Yesterday', details: 'Potential scam: Call claiming to be IRS with unusual urgency' },
    { id: 4, type: 'Email', source: 'newsletter@tech-updates.com', riskLevel: 'Low', time: '2 days ago', details: 'Legitimate newsletter with unusual formatting' }
  ];

  // Get appropriate color for risk level
  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-700">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Scams Detected</h2>
              <p className="text-2xl font-semibold text-gray-800">{stats.scamsDetected}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-100 text-yellow-700">
              <Eye className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Risky Messages</h2>
              <p className="text-2xl font-semibold text-gray-800">{stats.riskyMessages}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-700">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Safe Messages</h2>
              <p className="text-2xl font-semibold text-gray-800">{stats.safeMessages}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-100 text-blue-700">
              <Shield className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h2 className="text-sm font-medium text-gray-500">Protection Score</h2>
              <p className="text-2xl font-semibold text-gray-800">{stats.protectionScore}%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Protection Status */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Protection Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
          <div className="flex items-center p-4 border rounded-lg">
            <div className="mr-4 p-2 rounded-full bg-green-100">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Email Protection</h3>
              <p className="text-sm text-gray-500">Active</p>
            </div>
          </div>
          
          <div className="flex items-center p-4 border rounded-lg">
            <div className="mr-4 p-2 rounded-full bg-green-100">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium">Browser Extension</h3>
              <p className="text-sm text-gray-500">Active</p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Recent Alerts */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Recent Alerts</h2>
          <button className="text-sm text-blue-600 hover:text-blue-800">View All</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentAlerts.map((alert) => (
                <tr key={alert.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskColor(alert.riskLevel)}`}>
                      {alert.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{alert.time}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">{alert.details}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-900">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// Alerts Page Component
const AlertsContent = () => {
  const [filter, setFilter] = useState('all');
  const [timeRange, setTimeRange] = useState('7days');
  
  // Mock alerts data
  const allAlerts = [
    { id: 1, type: 'Email', source: 'support@bankofamerica-secure.com', riskLevel: 'High', time: '10:23 AM', date: 'Apr 7, 2025', details: 'Phishing attempt detected: Links to suspicious login portal', status: 'new' },
    { id: 2, type: 'Browser', source: 'www.amazen-shipping-update.com', riskLevel: 'High', time: '2:15 PM', date: 'Apr 6, 2025', details: 'Fake shopping site: Attempting to collect payment information', status: 'new' },
    { id: 3, type: 'Call', source: 'VoIP Unknown Caller', riskLevel: 'Medium', time: '11:45 AM', date: 'Apr 6, 2025', details: 'Potential scam: Call claiming to be IRS with unusual urgency', status: 'new' },
    { id: 4, type: 'Email', source: 'newsletter@tech-updates.com', riskLevel: 'Low', time: '9:30 AM', date: 'Apr 5, 2025', details: 'Legitimate newsletter with unusual formatting', status: 'resolved' },
    { id: 5, type: 'Email', source: 'info@paypaI-security.com', riskLevel: 'High', time: '3:22 PM', date: 'Apr 4, 2025', details: 'Phishing email: Lookalike domain with suspicious login form', status: 'resolved' },
    { id: 6, type: 'Browser', source: 'win-free-iphone.com', riskLevel: 'High', time: '1:18 PM', date: 'Apr 3, 2025', details: 'Prize scam: Requesting personal information', status: 'resolved' },
    { id: 7, type: 'Email', source: 'linkedin-invites@mailservice.org', riskLevel: 'Medium', time: '11:05 AM', date: 'Apr 2, 2025', details: 'Suspicious email with attachment claiming to be from LinkedIn', status: 'resolved' },
    { id: 8, type: 'Browser', source: 'covid-relief-application.com', riskLevel: 'High', time: '4:50 PM', date: 'Apr 1, 2025', details: 'Fake government website requesting financial information', status: 'resolved' }
  ];
  
  // Filter alerts based on selected filter
  const filteredAlerts = filter === 'all' 
    ? allAlerts 
    : allAlerts.filter(alert => 
        filter === 'high' 
          ? alert.riskLevel === 'High' 
          : filter === 'new' 
            ? alert.status === 'new' 
            : alert.status === 'resolved'
      );
  
  // Function to get appropriate color for risk level
  const getRiskColor = (risk) => {
    switch (risk) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 sm:mb-0">All Alerts</h2>
          <div className="flex space-x-4">
            <div className="relative">
              <select 
                className="h-10 px-4 pr-8 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Alerts</option>
                <option value="high">High Risk</option>
                <option value="new">New</option>
                <option value="resolved">Resolved</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Filter className="h-4 w-4 text-gray-400" />
              </div>
            </div>
            
            <div className="relative">
              <select 
                className="h-10 px-4 pr-8 border border-gray-300 rounded-md bg-white text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
                <option value="all">All Time</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <Calendar className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Level</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAlerts.map((alert) => (
                <tr key={alert.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div>{alert.date}</div>
                    <div className="text-xs">{alert.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.source}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{alert.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskColor(alert.riskLevel)}`}>
                      {alert.riskLevel}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${alert.status === 'new' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {alert.status === 'new' ? 'New' : 'Resolved'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-md truncate">{alert.details}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                      {alert.status === 'new' && (
                        <button className="text-green-600 hover:text-green-900">Resolve</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Alert Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-center h-24">
              <PieChart className="h-16 w-16 text-blue-500" />
            </div>
            <p className="text-center mt-2 font-medium">Risk Distribution</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-center h-24">
              <TrendingUp className="h-16 w-16 text-green-500" />
            </div>
            <p className="text-center mt-2 font-medium">Alert Trends</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-center h-24">
              <Inbox className="h-16 w-16 text-yellow-500" />
            </div>
            <p className="text-center mt-2 font-medium">Source Analysis</p>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-center h-24">
              <Clock className="h-16 w-16 text-purple-500" />
            </div>
            <p className="text-center mt-2 font-medium">Time Patterns</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Scan Page Component (placeholder)
const ScanContent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Scan for Threats</h2>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <UploadCloud className="h-16 w-16 mx-auto text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">Upload a file to scan</h3>
        <p className="mt-2 text-sm text-gray-500">
          Drag and drop files here or click to browse
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Select File
        </button>
      </div>
      
      <div className="mt-8">
        <h3 className="text-md font-medium text-gray-800 mb-4">Or enter a URL to check</h3>
        <div className="flex">
          <input 
            type="text" 
            placeholder="https://example.com" 
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
            Scan URL
          </button>
        </div>
      </div>
    </div>
  );
};

// Reports Page Component (placeholder)
const ReportsContent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Security Reports</h2>
      <p className="text-gray-600 mb-6">View and download security reports and analytics</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-gray-900">Monthly Security Summary</h3>
              <p className="text-sm text-gray-500">April 2025</p>
            </div>
            <Download className="h-5 w-5 text-blue-600" />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Complete overview of all security events, threats detected, and protection status for the month.
          </p>
          <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
            View Report <ArrowUpRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="border rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-medium text-gray-900">Threat Intelligence Report</h3>
              <p className="text-sm text-gray-500">Q1 2025</p>
            </div>
            <Download className="h-5 w-5 text-blue-600" />
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Detailed analysis of emerging threats, attack patterns, and security recommendations.
          </p>
          <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
            View Report <ArrowUpRight className="h-4 w-4 ml-1" />
          </button>
        </div>
      </div>
      
      <h3 className="font-medium text-gray-800 mb-4">Recent Reports</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Weekly Security Summary</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 7, 2025</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PDF</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">View</button>
                  <button className="text-blue-600 hover:text-blue-900">Download</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Phishing Attempt Analysis</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Apr 5, 2025</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PDF</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">View</button>
                  <button className="text-blue-600 hover:text-blue-900">Download</button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Monthly Security Summary</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Mar 31, 2025</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">PDF</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">View</button>
                  <button className="text-blue-600 hover:text-blue-900">Download</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Function to render the appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardContent />;
      case 'alerts':
        return <AlertsContent />;
      case 'scan':
        return <ScanContent />;
      case 'reports':
        return <ReportsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4 flex items-center space-x-2 border-b">
          <img src="/logo.png" alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">ScamShield</span>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Main</div>
            <nav className="mt-2 space-y-1">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <BarChart2 className="h-5 w-5 mr-2" />
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('alerts')}
                className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${activeTab === 'alerts' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <AlertTriangle className="h-5 w-5 mr-2" />
                Alerts
              </button>
              <button 
                onClick={() => setActiveTab('scan')}
                className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${activeTab === 'scan' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <Search className="h-5 w-5 mr-2" />
                Scan
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className={`flex items-center w-full px-3 py-2 text-sm rounded-md ${activeTab === 'reports' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <FileText className="h-5 w-5 mr-2" />
                Reports
              </button>
            </nav>
          </div>
          
          <div className="mb-4">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Settings</div>
            <nav className="mt-2 space-y-1">
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100">
                <Users className="h-5 w-5 mr-2" />
                Family Members
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100">
                <Settings className="h-5 w-5 mr-2" />
                Preferences
              </button>
              <button className="flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </button>
            </nav>
          </div>
        </div>
        
        <div className="mt-auto p-4 border-t">
          <button className="flex items-center w-full px-3 py-2 text-sm rounded-md text-gray-600 hover:bg-gray-100">
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              <Search className="h-4 w-4 mr-2" />
              Scan Now
            </button>
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <span>AS</span>
            </div>
          </div>
        </header>
        
        {/* Tab Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

// Change the export to match the component name
export default App;