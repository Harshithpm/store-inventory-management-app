import Link from 'next/link';

export default function Nav() {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<div className='container-fluid'>
				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item'>
							<Link href='/'>
								<a
									className='nav-link disabled'
									aria-disabled='true'>
									Home
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/categories'>
								<a className='nav-link'>Categories</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/add-category'>
								<a className='nav-link'>
									<i className='fas fa-plus'></i> Category
								</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/products'>
								<a className='nav-link'>Products</a>
							</Link>
						</li>
						<li className='nav-item'>
							<Link href='/add-product'>
								<a className='nav-link'>
									<i className='fas fa-plus'></i> Product
								</a>
							</Link>
						</li>
						<li className='nav-item float-end'>
							<Link href='/login'>
								<a className='nav-link active'>Login</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
