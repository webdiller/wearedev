import Link from "next/link";

type PageProps = {
  title: string;
};

const PageTitle = ({ title }: PageProps) => {
  return (
    <div
      className="breadcrumb-area bg-cover"
      style={{ background: "url('img/bg/7.png')" }}
    >
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h2 className="page-title">{title}</h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <ul className="page-list">
                <li>
                  <Link href="/">Главная</Link>
                </li>
                <li>Сервис</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PageTitle };
