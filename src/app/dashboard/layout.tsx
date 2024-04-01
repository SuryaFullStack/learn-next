export default function DashboardLayout({
  children,
  userAnalytics,
  revenueMetrics,
  notifications,
  login,
}: {
  children: React.ReactNode;
  userAnalytics: React.ReactNode;
  revenueMetrics: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isloggedin = false;
  return isloggedin ? (
    <>
      {children}
      <div className="flex gap-4">
        <div className="flex flex-col justify-center gap-4 p-4 shadow shadow-amber-500">
          <div>{userAnalytics}</div>
          <div>{revenueMetrics}</div>
        </div>
        <div className="flex flex-col justify-center gap-4 p-4 shadow shadow-amber-500">
          {notifications}
        </div>
      </div>
    </>
  ) : (
    login
  );
}
