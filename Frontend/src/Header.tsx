import chefClaudeLogo from "./assets/images/chef-claude-icon.png";

export default function Header() {
    return (
        <header>
            <nav className="navbar header">
                <div className="container-fluid d-flex justify-content-center align-items-center">
                    <a className="d-flex align-items-center gap-3 navbar-brand" href="#">
                        <img src={chefClaudeLogo} alt="Logo" width="50" height="auto"/>
                        <span className="h1 mb-0 name">Chef Claude</span>
                    </a>
                </div>
            </nav>
        </header>
    )
}