import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="grid grid-cols-4 max-w-md mx-auto mb-6 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-xl">
        <TabsTrigger value="overview" className="rounded-lg">Overview</TabsTrigger>
        <TabsTrigger value="analytics" className="rounded-lg">Analytics</TabsTrigger>
        <TabsTrigger value="queue" className="rounded-lg">Post Queue</TabsTrigger>
        <TabsTrigger value="settings" className="rounded-lg">Integrations</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Automation Overview</CardTitle>
            <CardDescription>
              Monitor your active autonomous workflows, draft pipelines, and AI credit utilization across all profiles.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-neutral-500 dark:text-neutral-400 space-y-2">
            <p> <strong>Status:</strong> Engine fully active.</p>
            <p>You have <strong>14 AI-generated drafts</strong> awaiting optimization and <strong>4 automated posts</strong> scheduled for dispatch today.</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="analytics">
        <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Channel Analytics</CardTitle>
            <CardDescription>
              Track continuous real-time telemetry metrics, impression spikes, and post engagement aggregated from live platform APIs.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-neutral-500 dark:text-neutral-400 space-y-2">
            <p> Total network impressions are up <strong>24.8%</strong> this week.</p>
            <p> Top Performing Node: <strong>LinkedIn Thread Campaign</strong> (10k+ clearing benchmark verification).</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="queue">
        <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Intelligent Post Queue</CardTitle>
            <CardDescription>
              Review your chronological distribution matrix. Content blocks are automatically queued for high-engagement windows.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-neutral-500 dark:text-neutral-400 space-y-2">
            <p> Next automated dispatch scheduled for <strong>5:30 PM (Optimal Peak Window)</strong> targeting Instagram.</p>
            <p><strong>Queue Health:</strong> 4 days of content remaining based on your dynamic pacing profile.</p>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="settings">
        <Card className="border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Ecosystem Connections</CardTitle>
            <CardDescription>
              Manage your encrypted API integrations, OAuth 2.0 application protocols, and OpenAI generation preferences safely.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-neutral-500 dark:text-neutral-400 space-y-2">
            <p> Connected Networks: <strong>OpenAI API, LinkedIn Professional, X (Twitter) Engine, Meta Graph API.</strong></p>
            <p> <strong>System Alert:</strong> Your X OAuth access token is approaching expiration. Re-authentication recommended within 3 days.</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}