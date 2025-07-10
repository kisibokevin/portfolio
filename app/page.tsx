import { About, Contact, Experience, Footer, Hero, Navigation, Projects } from "@/components";
export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			{/* Navigation */}
			<Navigation />
			{/* Hero Section */}
			<Hero />
			{/* About Section */}
			<About />
			{/* Projects Section */}
			<Projects />
			{/* Experience Section */}
			<Experience />
			{/* Contact Section */}
			<Contact />
			{/* Footer */}
			<Footer />
		</div>
	);
}
