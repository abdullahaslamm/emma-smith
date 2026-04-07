import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { MailIcon } from "lucide-react";
import discord from "@/assets/discord.svg";

export default function Footer() {
  // get the current time in UTC+1 time zone
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      date.setHours(date.getHours());
      setTime(
        date.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "numeric",
        }),
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-between py-6">
      <Link
          href="https://discord.com/users/1430976728041259218"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <img src="/assets/discord.svg" className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">Elra Quinn</span>
          </Button>
        </Link>
        <span className="flex flex-row items-center space-x-4">
          <p className="text-xs text-muted-foreground">
            Designed & Developed by{" "}
            <Link
              href="https://discord.com/users/1430976728041259218"
              target="_blank"
              passHref
              className="text-foreground transition hover:text-primary"
            >
              Elra Quinn
            </Link>
          </p>
        </span>
        <Link
          href="mailto:elaraquinn@depixstudio.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">elaraquinn@depixstudio.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
