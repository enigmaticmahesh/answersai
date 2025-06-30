import MainContent from "./components/main-content.component"
import Header from "@/components/header.component"
import Sidebar from "@/components/sidebar.component"

const Dashboard = () => {
    return (
        <div className="dashboard-page-container flex h-screen">
            <Sidebar />
            <div className="main-section flex-1 flex flex-col">
                <Header />
                <MainContent />
            </div>
        </div>
    )
}

export default Dashboard