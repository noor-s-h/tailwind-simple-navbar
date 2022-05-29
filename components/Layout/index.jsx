import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container max-w-[60rem] mx-auto px-4 font-medium text-gray-400 pt-2">
        {children}
      </main>
    </>
  );
}
