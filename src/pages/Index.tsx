import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Gauge",
      title: "Невероятная скорость",
      description: "Мощный двигатель разгоняет машину до невероятных скоростей за считанные секунды"
    },
    {
      icon: "Zap",
      title: "Динамичный дизайн",
      description: "Аэродинамичные формы создают неповторимый спортивный образ"
    },
    {
      icon: "Trophy",
      title: "Гоночный характер",
      description: "Настоящий спортивный автомобиль с характером победителя"
    },
    {
      icon: "Heart",
      title: "Предмет мечты",
      description: "Каждая деталь воплощает мечту о совершенном автомобиле"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-racing-red via-bold-gold to-cobalt-blue">
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="font-racing text-6xl md:text-8xl text-white drop-shadow-2xl">
              МАШИНА МЕЧТЫ
            </h1>
            <p className="text-xl md:text-2xl text-white font-sans font-light max-w-2xl mx-auto">
              Это не просто автомобиль — это воплощение скорости, мощи и страсти
            </p>
            <Button 
              size="lg" 
              className="bg-bold-gold hover:bg-bold-gold/90 text-deep-black font-bold text-lg px-8 py-6 rounded-full shadow-2xl transition-transform hover:scale-105"
            >
              Узнать больше
              <Icon name="ChevronDown" className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-racing text-4xl md:text-6xl text-racing-red mb-4">
              ПОЧЕМУ ЭТО МАШИНА МЕЧТЫ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-racing-red via-bold-gold to-cobalt-blue mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 border-racing-red/20 hover:border-racing-red transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-racing-red to-bold-gold flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon} size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-racing text-2xl text-cobalt-blue mb-3">
                        {feature.title}
                      </h3>
                      <p className="font-sans text-gray-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-bold-gold shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-racing-red via-bold-gold to-cobalt-blue"></div>
                  <img 
                    src="https://cdn.poehali.dev/projects/fb9c45ff-c277-4601-a365-c5eb8460e55f/files/09bf0119-d58a-4f91-a790-049416a13e1c.jpg"
                    alt="Машина мечты"
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                  <h3 className="font-racing text-3xl text-racing-red mb-4">
                    Воплощение совершенства
                  </h3>
                  <p className="font-sans text-gray-700 text-lg leading-relaxed mb-4">
                    Каждая линия, каждая деталь этого автомобиля создана для того, чтобы вызывать восхищение. 
                    Это не просто средство передвижения — это произведение искусства на колесах, которое дарит 
                    незабываемые эмоции каждую секунду за рулем.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-racing-red/10 rounded-full">
                      <Icon name="Star" className="text-racing-red" size={20} />
                      <span className="font-sans font-semibold text-racing-red">Премиум класс</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-bold-gold/10 rounded-full">
                      <Icon name="Sparkles" className="text-bold-gold" size={20} />
                      <span className="font-sans font-semibold text-yellow-700">Уникальный дизайн</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-cobalt-blue/10 rounded-full">
                      <Icon name="Rocket" className="text-cobalt-blue" size={20} />
                      <span className="font-sans font-semibold text-cobalt-blue">Максимальная мощность</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-racing-red via-bold-gold to-cobalt-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-racing text-4xl md:text-6xl text-white mb-8">
            МЕЧТА СТАНОВИТСЯ РЕАЛЬНОСТЬЮ
          </h2>
          <p className="font-sans text-xl text-white/90 max-w-3xl mx-auto mb-12">
            Создано папой и ребенком с любовью к автомобилям и скорости
          </p>
          <div className="flex justify-center gap-4">
            <Icon name="Flag" size={48} className="text-white animate-bounce" />
            <Icon name="Car" size={48} className="text-white" />
            <Icon name="Flag" size={48} className="text-white animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
