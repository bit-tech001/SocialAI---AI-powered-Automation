'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  FileText, 
  Settings, 
  Radio, 
  User, 
  Menu, 
  ChevronLeft, 
  ChevronRight,
  Plus,
  Zap,
  Globe,
  Bell,
  Search
} from 'lucide-react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  const navigation = [
    { id: 'overview', name: 'Overview', icon: LayoutDashboard },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'reports', name: 'Reports', icon: FileText },
    { id: 'settings', name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#09090b] text-zinc-100 font-sans">
      
      {/* SIDEBAR BLOCK */}
      <aside 
        className={`relative flex flex-col h-full border-r border-zinc-800 bg-[#09090b] transition-all duration-300 ease-in-out z-40 shrink-0
          ${sidebarOpen ? 'w-64' : 'w-[70px]'}`}
      >
        {/* Sidebar Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-zinc-800 shrink-0">
          <div className="flex items-center gap-2 overflow-hidden">
            <Radio className="h-5 w-5 text-indigo-500 shrink-0 animate-pulse" />
            {sidebarOpen && (
              <span className="font-bold text-base tracking-tight whitespace-nowrap bg-gradient-to-r from-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                Social.AI
              </span>
            )}
          </div>
          
          {/* Sidebar Toggle Toggle Mechanism - Lifted z-index context */}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="absolute -right-3 top-5 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-800 bg-[#09090b] text-zinc-400 hover:text-zinc-100 shadow-md transition-colors cursor-pointer"
          >
            {sidebarOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <nav className="flex-1 space-y-1 p-3 mt-2 overflow-y-auto">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all group cursor-pointer
                  ${isActive 
                    ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/50 shadow-inner' 
                    : 'text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200'
                  }`}
              >
                <Icon className={`h-4 w-4 shrink-0 transition-transform group-hover:scale-105 ${isActive ? 'text-indigo-400' : ''}`} />
                {sidebarOpen && <span className="transition-opacity duration-200 truncate">{item.name}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Account Unit */}
        <div className="border-t border-zinc-800 p-3 flex items-center gap-3 overflow-hidden bg-zinc-950/40 shrink-0">
          <div className="h-9 w-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0">
            <User className="h-4 w-4 text-zinc-400" />
          </div>
          {sidebarOpen && (
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium text-zinc-200 truncate">Workspace Core</span>
              <span className="text-[10px] text-zinc-500 truncate">node-142@socialai.io</span>
            </div>
          )}
        </div>
      </aside>

      {/* DASHBOARD RIGHT BODY WRAPPER */}
      <div className="flex flex-col flex-1 min-w-0 h-full overflow-y-auto bg-[#09090b]">
        
        {/* Upper Dashboard Navigation bar */}
        <header className="flex h-16 items-center justify-between border-b border-zinc-800 px-6 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-20 shrink-0">
          <div className="flex items-center gap-4">
            {/* Mobile / Left Menu Handle */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)} 
              className="rounded-md p-2 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
            
            <div className="relative hidden sm:block w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search workflows..." 
                className="w-full rounded-md border border-zinc-800 bg-zinc-950 pl-9 pr-4 py-1.5 text-xs text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-md hover:bg-zinc-900 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-500"></span>
            </button>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Engine Active
            </span>
          </div>
        </header>

        {/* Content Node Section */}
        <main className="p-6 max-w-6xl w-full mx-auto space-y-6 flex-1">
          
          {/* Upper Analytical Layout Widgets */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">Total Active Channels</p>
                  <h3 className="text-2xl font-bold mt-1 tracking-tight">12 Nodes</h3>
                </div>
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-indigo-400">
                  <Globe className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">Automation Velocity</p>
                  <h3 className="text-2xl font-bold mt-1 tracking-tight">98.4%</h3>
                </div>
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-amber-400">
                  <Zap className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-950 border-zinc-800 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase">Content Grid Buffer</p>
                  <h3 className="text-2xl font-bold mt-1 tracking-tight">3 Tasks</h3>
                </div>
                <button className="flex items-center gap-1 text-xs px-2.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors shadow cursor-pointer">
                  <Plus className="h-3.5 w-3.5" /> Deploy Post
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Tab Nodes Component */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="hidden">
              {navigation.map((item) => (
                <TabsTrigger key={item.id} value={item.id}>{item.name}</TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="overview" className="mt-0 space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card className="bg-zinc-950 border-zinc-800 md:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-zinc-100 text-lg">Workspace Engine Strategy</CardTitle>
                    <CardDescription className="text-zinc-400 text-xs">
                      Monitor your active autonomous content creation loops and live model grids.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-zinc-400 space-y-4">
                    <p>Your systems are running optimal generation metrics. You have 14 AI engine drafts awaiting distribution review checks.</p>
                    
                    <div className="border-t border-zinc-900 pt-4 space-y-3">
                      <p className="font-semibold text-zinc-200 text-xs tracking-wider uppercase">Live Network Logging Telemetry</p>
                      <div className="space-y-3 text-xs">
                        <div className="flex items-start gap-3 bg-zinc-900/30 p-2.5 rounded border border-zinc-900">
                          <span className="text-emerald-500">🚀</span>
                          <div>
                            <span className="font-medium text-zinc-200">X Content Dispatcher:</span> Thread deployed successfully to platform API hook.
                          </div>
                        </div>
                        <div className="flex items-start gap-3 bg-zinc-900/30 p-2.5 rounded border border-zinc-900">
                          <span className="text-indigo-400">🤖</span>
                          <div>
                            <span className="font-medium text-zinc-200">LLM Generation Array:</span> Generated 3 content variation vectors from base dynamic prompt.
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-950 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-zinc-100 text-sm">System Health</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                      <span className="text-zinc-500">API Latency</span>
                      <span className="text-emerald-400 font-mono">14ms</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-zinc-900">
                      <span className="text-zinc-500">Model Load</span>
                      <span className="text-zinc-300 font-mono">0.42 / 1.0</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-zinc-500">Token Status</span>
                      <span className="text-amber-400 font-mono">Re-auth needed</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <Card className="bg-zinc-950 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Performance Telemetry Matrix</CardTitle>
                  <CardDescription className="text-zinc-400">Real-time analytical pipelines monitoring engagement parameters.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-zinc-400">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-lg text-xs font-medium">
                    📈 Analytics Target Verified: Recent LinkedIn production thread eclipsed 10,000 distinct impressions.
                  </div>
                  <p>Continuous dynamic loop mechanisms are routing engagement indexes straight back into model prompt parameters for hyper-optimized generation pipelines.</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports" className="mt-0">
              <Card className="bg-zinc-950 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Compiled Distribution Data</CardTitle>
                  <CardDescription className="text-zinc-400">Download formatted intelligence logs for downstream validation loops.</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-zinc-400">
                  You have <strong className="text-zinc-200">5 auto-generated multi-channel reports</strong> assembled and ready for structural export.
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <Card className="bg-zinc-950 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-zinc-100">Node Cluster Configuration</CardTitle>
                  <CardDescription className="text-zinc-400">Manage encryption signatures, background cron frequencies, and verified credential configurations.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-zinc-400">
                  <div className="p-3 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-lg text-xs font-medium">
                    ⚠️ Network Interruption Profile: X protocol authorization lifecycle terminates in 3 days. Reset OAuth token matrix.
                  </div>
                  <p>Adjust token buffer windowing thresholds, regional delivery configurations, and fallback failure modes here.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>

    </div>
  );
}