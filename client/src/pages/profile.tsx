import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  Users, 
  Star, 
  MapPin, 
  Briefcase, 
  CheckCircle, 
  Award, 
  BarChart
} from "lucide-react";
import { 
  Card, 
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

// Sample worker profiles data for demonstration purposes
const sampleWorkers = [
  {
    id: 1,
    name: "Robert Chen",
    username: "rob_architect",
    avatar: null,
    title: "Architectural Designer",
    location: "San Francisco, CA",
    rating: 4.9,
    completedProjects: 42,
    skills: ["Architecture", "3D Modeling", "Sustainability", "Urban Planning"],
    bio: "Award-winning architect with 10+ years of experience in sustainable design and urban development projects.",
    badges: ["Verified", "Top Rated", "Quick Responder"],
    hourlyRate: 85,
    reputation: {
      onTime: 98,
      quality: 95,
      communication: 92
    }
  },
  {
    id: 2,
    name: "Maya Johnson",
    username: "maya_dev",
    avatar: null,
    title: "Smart Contract Developer",
    location: "Remote",
    rating: 4.8,
    completedProjects: 37,
    skills: ["Solidity", "ERC-721", "ERC-1155", "DeFi", "Ethereum"],
    bio: "Blockchain enthusiast specializing in NFT smart contracts and tokenization platforms for real estate assets.",
    badges: ["Verified", "Rising Talent"],
    hourlyRate: 95,
    reputation: {
      onTime: 94,
      quality: 97,
      communication: 90
    }
  },
  {
    id: 3,
    name: "Derek Williams",
    username: "property_valuation_expert",
    avatar: null,
    title: "Real Estate Appraiser",
    location: "Chicago, IL",
    rating: 4.7,
    completedProjects: 56,
    skills: ["Property Valuation", "Market Analysis", "Commercial Real Estate", "Legal Compliance"],
    bio: "Licensed real estate appraiser with expertise in tokenized property valuation and fractional ownership structures.",
    badges: ["Verified", "Expert"],
    hourlyRate: 75,
    reputation: {
      onTime: 96,
      quality: 93,
      communication: 95
    }
  },
  {
    id: 4,
    name: "Sarah Park",
    username: "legal_advisor",
    avatar: null,
    title: "Real Estate Attorney",
    location: "New York, NY",
    rating: 4.9,
    completedProjects: 29,
    skills: ["Real Estate Law", "Smart Contracts", "Regulatory Compliance", "Property Rights"],
    bio: "Attorney specializing in the legal frameworks for blockchain-based real estate transactions and DAO governance.",
    badges: ["Verified", "Legal Expert"],
    hourlyRate: 120,
    reputation: {
      onTime: 99,
      quality: 98,
      communication: 97
    }
  }
];

// Component to display a single worker profile card
const WorkerProfileCard = ({ worker }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex gap-4">
          <Avatar className="h-14 w-14">
            <AvatarImage src={worker.avatar || undefined} />
            <AvatarFallback className="text-lg">{worker.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium">{worker.name}</CardTitle>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="ml-1 font-medium">{worker.rating}</span>
              </div>
            </div>
            <p className="text-neutral-600">{worker.title}</p>
            <div className="flex items-center text-sm text-neutral-500 mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{worker.location}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1 mb-3">
          {worker.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="bg-primary-50 text-primary-700 border-primary-200">
              {badge === "Verified" && <CheckCircle className="h-3 w-3 mr-1" />}
              {badge === "Top Rated" && <Award className="h-3 w-3 mr-1" />}
              {badge === "Expert" && <Briefcase className="h-3 w-3 mr-1" />}
              {badge === "Rising Talent" && <BarChart className="h-3 w-3 mr-1" />}
              {badge}
            </Badge>
          ))}
        </div>
        
        <p className="text-sm text-neutral-700 mb-3 line-clamp-2">{worker.bio}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {worker.skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-neutral-50">
              {skill}
            </Badge>
          ))}
          {worker.skills.length > 4 && (
            <Badge variant="outline" className="bg-neutral-50">
              +{worker.skills.length - 4} more
            </Badge>
          )}
        </div>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">On-time Delivery</span>
            <span className="font-medium">{worker.reputation.onTime}%</span>
          </div>
          <Progress value={worker.reputation.onTime} className="h-1.5" />
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Work Quality</span>
            <span className="font-medium">{worker.reputation.quality}%</span>
          </div>
          <Progress value={worker.reputation.quality} className="h-1.5" />
          
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">Communication</span>
            <span className="font-medium">{worker.reputation.communication}%</span>
          </div>
          <Progress value={worker.reputation.communication} className="h-1.5" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-primary-600 font-medium">${worker.hourlyRate}/hr</div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Users className="h-4 w-4 mr-2" />
            Profile
          </Button>
          <Button size="sm">Contact</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Main component for the community talent page
export default function CommunityTalent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [skillFilter, setSkillFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("rating");
  
  // Filter function based on search query, skill filter, and sort order
  const filteredWorkers = sampleWorkers
    .filter(worker => 
      worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .filter(worker => 
      skillFilter === "all" || 
      worker.skills.some(skill => skill.toLowerCase() === skillFilter.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "rating") {
        return b.rating - a.rating;
      } else if (sortOrder === "experience") {
        return b.completedProjects - a.completedProjects;
      } else if (sortOrder === "price_high") {
        return b.hourlyRate - a.hourlyRate;
      } else if (sortOrder === "price_low") {
        return a.hourlyRate - b.hourlyRate;
      }
      return 0;
    });
  
  // Extract all unique skills from all workers for the skill filter
  const allSkills = Array.from(
    new Set(sampleWorkers.flatMap(worker => worker.skills))
  ).sort();
  
  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">Community Talent</h1>
          <p className="text-neutral-500">
            Discover skilled professionals in the DAC community for your property and marketplace needs
          </p>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
          <Input
            placeholder="Search talent by name, skill, or keyword..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="whitespace-nowrap">
                <Filter className="h-4 w-4 mr-2" />
                Skills
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Filter by Skill</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuRadioGroup value={skillFilter} onValueChange={setSkillFilter}>
                  <DropdownMenuRadioItem value="all">All Skills</DropdownMenuRadioItem>
                  {allSkills.map((skill, index) => (
                    <DropdownMenuRadioItem key={index} value={skill.toLowerCase()}>
                      {skill}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="whitespace-nowrap">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                Sort
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuLabel>Sort Talent</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                <DropdownMenuRadioItem value="rating">Top Rated</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="experience">Most Experienced</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price_high">Highest Hourly Rate</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="price_low">Lowest Hourly Rate</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Worker Profiles Grid */}
      {filteredWorkers.length === 0 ? (
        <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200">
          <h3 className="text-xl font-medium text-neutral-600 mb-2">No talent found</h3>
          <p className="text-neutral-500 mb-6">Try adjusting your search or filters to find community members.</p>
          <Button variant="outline" onClick={() => {setSearchQuery(""); setSkillFilter("all");}}>
            Clear all filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredWorkers.map(worker => (
            <WorkerProfileCard key={worker.id} worker={worker} />
          ))}
        </div>
      )}
    </div>
  );
}