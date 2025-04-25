import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Plus, Search, Filter, ArrowUpDown, Clock, DollarSign, Star, Tag, MapPin, ShieldCheck } from "lucide-react";
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
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Sample task data for demo purposes
const myCreatedTasks = [
  {
    id: 1,
    title: "Property condition assessment for tokenization",
    description: "Need a qualified real estate professional to assess the condition of a commercial property before it's tokenized on our platform",
    price: 500,
    currency: "USD",
    deadline: "2023-09-15T12:00:00Z",
    location: "Remote",
    category: "Assessment",
    skills: ["Real Estate", "Valuation", "Report Writing"],
    status: "Open",
    applicants: 3
  },
  {
    id: 2,
    title: "Create smart contract for fractional property ownership",
    description: "Develop a secure smart contract for fractional ownership of a multi-family residential property",
    price: 1500,
    currency: "USD",
    deadline: "2023-08-30T12:00:00Z",
    location: "Remote",
    category: "Development",
    skills: ["Solidity", "Smart Contracts", "Real Estate"],
    status: "In Progress",
    applicants: 5,
    assignedTo: {
      id: 12,
      name: "Blockchain Developer",
      username: "blockdev",
      avatar: null
    }
  }
];

const myAssignedTasks = [
  {
    id: 3,
    title: "Property listing photography and virtual tour",
    description: "Professional photography and creation of virtual tour for luxury apartment listing",
    price: 300,
    currency: "USD",
    deadline: "2023-08-25T12:00:00Z",
    location: "New York, NY",
    category: "Media",
    skills: ["Photography", "Virtual Tour", "Real Estate"],
    status: "In Progress",
    createdBy: {
      id: 8,
      name: "Property Manager",
      username: "prop_manager",
      avatar: null
    }
  }
];

// Component to display a single task card
const TaskCard = ({ task, isCreator = false }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };
  
  const getStatusColor = (status: string) => {
    switch(status.toLowerCase()) {
      case 'open':
        return "bg-green-100 text-green-800";
      case 'in progress':
        return "bg-blue-100 text-blue-800";
      case 'under review':
        return "bg-amber-100 text-amber-800";
      case 'completed':
        return "bg-purple-100 text-purple-800";
      case 'cancelled':
        return "bg-red-100 text-red-800";
      default:
        return "bg-neutral-100 text-neutral-800";
    }
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">{task.title}</CardTitle>
          <Badge className={getStatusColor(task.status)}>{task.status}</Badge>
        </div>
        <div className="flex items-center space-x-4 text-sm text-neutral-500">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{task.price} {task.currency}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Due {formatDate(task.deadline)}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{task.location}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-neutral-600 text-sm mb-3 line-clamp-2">{task.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant="outline" className="bg-neutral-50">
            <Tag className="h-3 w-3 mr-1" />
            {task.category}
          </Badge>
          {task.skills.slice(0, 3).map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-neutral-50">
              {skill}
            </Badge>
          ))}
          {task.skills.length > 3 && (
            <Badge variant="outline" className="bg-neutral-50">
              +{task.skills.length - 3} more
            </Badge>
          )}
        </div>
        
        {isCreator && task.status === 'Open' && (
          <div className="flex items-center">
            <ShieldCheck className="h-4 w-4 text-amber-500 mr-1" />
            <span className="text-sm text-neutral-600">{task.applicants} applicants</span>
          </div>
        )}
        
        {isCreator && task.status === 'In Progress' && task.assignedTo && (
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={task.assignedTo.avatar || undefined} />
              <AvatarFallback className="text-xs">
                {task.assignedTo.name?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-neutral-600">Assigned to {task.assignedTo.name}</span>
          </div>
        )}
        
        {!isCreator && task.status === 'In Progress' && task.createdBy && (
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={task.createdBy.avatar || undefined} />
              <AvatarFallback className="text-xs">
                {task.createdBy.name?.charAt(0) || 'U'}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-neutral-600">Created by {task.createdBy.name}</span>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          <Link href={`/marketplace/task/${task.id}`}>
            <Button variant="outline" size="sm">View Details</Button>
          </Link>
          
          {isCreator && task.status === 'Open' && (
            <Link href={`/marketplace/task/${task.id}/applicants`}>
              <Button size="sm">Review Applicants</Button>
            </Link>
          )}
          
          {isCreator && task.status === 'In Progress' && (
            <Link href={`/marketplace/task/${task.id}/progress`}>
              <Button size="sm">View Progress</Button>
            </Link>
          )}
          
          {!isCreator && task.status === 'In Progress' && (
            <Link href={`/marketplace/task/${task.id}/submit`}>
              <Button size="sm">Update Progress</Button>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default function MyTasks() {
  const [activeTab, setActiveTab] = useState("created");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");
  
  // Filter function
  const filterTasks = (tasks) => {
    return tasks
      .filter(task => 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .filter(task => statusFilter === "all" || task.status.toLowerCase() === statusFilter.toLowerCase())
      .sort((a, b) => {
        if (sortOrder === "newest") {
          return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
        } else if (sortOrder === "oldest") {
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        } else if (sortOrder === "highest") {
          return b.price - a.price;
        } else if (sortOrder === "lowest") {
          return a.price - b.price;
        }
        return 0;
      });
  };
  
  const filteredCreatedTasks = filterTasks(myCreatedTasks);
  const filteredAssignedTasks = filterTasks(myAssignedTasks);
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-heading font-bold mb-2">My Tasks</h1>
          <p className="text-neutral-500">
            Manage tasks you've created and tasks assigned to you
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link href="/marketplace/create">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create New Task
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Tabs */}
      <Tabs 
        defaultValue="created" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-6"
      >
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="created">Created by Me ({myCreatedTasks.length})</TabsTrigger>
          <TabsTrigger value="assigned">Assigned to Me ({myAssignedTasks.length})</TabsTrigger>
        </TabsList>
        
        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" size={18} />
            <Input
              placeholder="Search tasks..."
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
                  Status
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={statusFilter} onValueChange={setStatusFilter}>
                  <DropdownMenuRadioItem value="all">All Statuses</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="open">Open</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="in progress">In Progress</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="under review">Under Review</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="completed">Completed</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="cancelled">Cancelled</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
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
                <DropdownMenuLabel>Sort Tasks</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                  <DropdownMenuRadioItem value="newest">Newest Deadline</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="oldest">Oldest Deadline</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="highest">Highest Price</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="lowest">Lowest Price</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Task Listings */}
        <TabsContent value="created" className="mt-0">
          {filteredCreatedTasks.length === 0 ? (
            <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-medium text-neutral-600 mb-2">No Tasks Found</h3>
              <p className="text-neutral-500 mb-6">You haven't created any tasks that match your search criteria.</p>
              <Link href="/marketplace/create">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create a Task
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCreatedTasks.map(task => (
                <TaskCard key={task.id} task={task} isCreator={true} />
              ))}
            </div>
          )}
        </TabsContent>
        
        <TabsContent value="assigned" className="mt-0">
          {filteredAssignedTasks.length === 0 ? (
            <div className="text-center py-12 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="text-xl font-medium text-neutral-600 mb-2">No Tasks Found</h3>
              <p className="text-neutral-500 mb-6">You haven't been assigned any tasks that match your search criteria.</p>
              <Link href="/marketplace">
                <Button>
                  Browse Available Tasks
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredAssignedTasks.map(task => (
                <TaskCard key={task.id} task={task} isCreator={false} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}