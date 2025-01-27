import { Box } from '@mui/material';
import { ContainerLeftBox, LinePrice, TextIcon } from './PriceStyle';
import { useSelector } from 'react-redux';

const DataTextIcon = [
  { id: 1, icon: 'hammer', textKey: 'installation' },
  { id: 2, icon: 'information-circle', textKey: 'consultation' },
  { id: 3, icon: 'construct', textKey: 'design' },
  { id: 4, icon: 'build', textKey: 'service' },
  { id: 5, icon: 'flame', textKey: 'energy_saving' },
  { id: 6, icon: 'shield-checkmark', textKey: 'security' },
  { id: 7, icon: 'document-text', textKey: 'documents' },
  { id: 8, icon: 'wallet', textKey: 'budget' },
  { id: 9, icon: 'gift', textKey: 'seasonal_offers' },
  { id: 10, icon: 'help-circle', textKey: 'support' },
];

const LeftPrice = () => {
  const { languageStore } = useSelector((state) => state.umra);

  // Мультиязычные данные
  const textContent = languageStore
    ? {
        header: 'Толук коштоп берүү:',
        installation: 'Жабдууларды орнотуу боюнча кесипкөй кызмат көрсөтүү',
        consultation: 'Жылуулук системасын тандоо боюнча кеңеш берүү',
        design: 'Жылуулук системаларын долбоорлоо',
        service: 'Кызмат көрсөтүү жана оңдоо',
        energy_saving: 'Энергияны үнөмдөө боюнча сунуштар',
        security: 'Жабдуулардын коопсуздугуна кепилдик',
        documents: 'Документтерди толтуруу боюнча жардам',
        budget: 'Бюджетке ылайыктуу чечимдер',
        seasonal_offers: 'Жаздык сунуштар жана бонустар',
        support: 'Бардык этаптар боюнча жардам',
      }
    : {
        header: 'Полное сопровождение:',
        installation: 'Профессиональная установка оборудования',
        consultation: 'Консультации по выбору отопительной системы',
        design: 'Проектирование отопительных систем',
        service: 'Обслуживание и ремонт оборудования',
        energy_saving: 'Рекомендации по экономии энергоресурсов',
        security: 'Гарантия безопасности системы отопления',
        documents: 'Помощь с документами для подключения',
        budget: 'Подбор оптимальных решений для бюджета',
        seasonal_offers: 'Сезонные акции и бонусы',
        support: 'Поддержка на всех этапах установки',
      };

  return (
    <>
      <ContainerLeftBox>
        <h2>{textContent.header}</h2> {/* Динамический заголовок */}
        {DataTextIcon.map((item) => (
          <div key={item.id}>
            <TextIcon>
              <Box>
                <ion-icon name={item.icon}></ion-icon>
              </Box>
              <p>{textContent[item.textKey]}</p>
            </TextIcon>
            <LinePrice />
          </div>
        ))}
      </ContainerLeftBox>
    </>
  );
};

export default LeftPrice;
