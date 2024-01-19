import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
    return (
      <div>
        Landing page (Unprotected)
        <div>
          <Link href="/sign-in">
            <Button>
              Login
            </Button>
          </Link>
          <Link href="/sign-in">
            <Button>
              Register
            </Button>
          </Link>

        </div>

      </div>
    );
  }