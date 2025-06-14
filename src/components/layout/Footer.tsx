const Footer = () => {
  // 日本のタイムゾーンで、ビルド時の日時を取得
  const lastUpdated = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between">
        {/* 左側: コピーライト */}
        <div className="md:order-1">
          <p className="text-center text-sm md:text-left">
            &copy; {currentYear} Kengo Ikeuchi. All rights reserved.
          </p>
        </div>
        {/* 右側: 最終更新日時 */}
        <div className="mt-4 md:order-2 md:mt-0">
          <p className="text-center text-sm text-muted-foreground md:text-right">
            最終更新: {lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
