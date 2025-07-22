
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/10">
      <div className="glass-card rounded-xl p-8 md:p-12 text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-botBlue/20 flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl font-bold text-botBlue">404</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" className="neon-border" variant="outline" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Go back home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
