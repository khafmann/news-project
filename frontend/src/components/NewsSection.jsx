export default function NewsSection() {
    return (
        <section>
            <h3 className="text-lg font-bold mb-2">Спортивные новости</h3>
            <ul className="space-y-2">
                <li className="p-2 bg-gray-50 rounded">
                    <p>G2 0 - 2 FaZe</p>
                    <small className="text-gray-600">Смотреть статистику на hltv.org</small>
                </li>
                <li className="p-2 bg-gray-50 rounded">
                    <p>MOUZ 1 - 2 Spirit</p>
                    <small className="text-gray-600">Смотреть статистику на hltv.org</small>
                </li>
            </ul>
            <h3 className="text-lg font-bold mt-4 mb-2">Политические новости</h3>
            <ul className="space-y-2">
                <li className="p-2 bg-gray-50 rounded">Ввести странам Центральной Азии визовый режим с Страной-A предлагает политик Страны-B</li>
                <li className="p-2 bg-gray-50 rounded">Выборы президента проходят в Стране-C, оппозиция объявила бойкот</li>
            </ul>
        </section>
    );
}
