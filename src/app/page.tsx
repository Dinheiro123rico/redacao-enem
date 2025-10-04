"use client"

import { Check, Star, Users, Award, Clock, BookOpen, Target, ArrowRight, Play } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ENEM 1000</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-sm text-gray-600">✅ Mais de 10.000 alunos aprovados</span>
              <span className="text-sm text-gray-600">⭐ 4.9/5 estrelas</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section com VSL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔥 OFERTA LIMITADA - Apenas 48 horas
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Descubra o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Método Secreto</span><br />
            Para Tirar <span className="text-yellow-500">NOTA 1000</span><br />
            Na Redação do ENEM
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            O mesmo sistema que já ajudou mais de 10.000 estudantes a conquistarem a nota máxima 
            e garantirem sua vaga na universidade dos sonhos
          </p>
        </div>

        {/* VSL Container */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            {!showVideo ? (
              <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                <div className="text-center">
                  <button 
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center justify-center w-20 h-20 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 hover:scale-110 mb-4"
                  >
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                  <p className="text-white text-lg font-medium">
                    ▶️ Assista ao vídeo e descubra como tirar 1000 na redação
                  </p>
                  <p className="text-gray-300 text-sm mt-2">
                    Duração: 15 minutos que podem mudar sua vida
                  </p>
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="text-lg mb-4">🎥 Insira aqui o código embed do seu VSL</p>
                  <p className="text-sm text-gray-300">
                    Substitua este conteúdo pelo iframe ou código do seu vídeo
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Social Proof */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-70">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-sm font-medium">10.000+ alunos</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-medium">4.9/5 estrelas</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-green-600" />
            <span className="text-sm font-medium">98% de aprovação</span>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Mais de 10.000 Estudantes Escolheram Nosso Método?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não é sorte. É um sistema comprovado que funciona para qualquer pessoa, 
              independente do seu nível atual de escrita.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Método Comprovado</h3>
              <p className="text-gray-600">
                Sistema testado e aprovado por milhares de estudantes que conquistaram nota 1000
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados Rápidos</h3>
              <p className="text-gray-600">
                Veja sua nota melhorar em apenas 30 dias seguindo nosso passo a passo
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conteúdo Completo</h3>
              <p className="text-gray-600">
                Tudo que você precisa saber sobre redação ENEM em um só lugar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veja o Que Nossos Alunos Estão Dizendo
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de pessoas reais que mudaram suas vidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Consegui tirar 1000 na redação seguindo exatamente o que aprendi no curso. 
                Passei em Medicina na USP!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Maria Silva</p>
                  <p className="text-sm text-gray-500">Aprovada em Medicina - USP</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "De 400 para 1000 pontos! Não acreditava que era possível. 
                Agora estou cursando Direito na UFMG."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  J
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">João Santos</p>
                  <p className="text-sm text-gray-500">Aprovado em Direito - UFMG</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "O método é incrível! Consegui 980 pontos na redação e passei 
                em Engenharia na UFRJ em primeiro lugar."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Ana Costa</p>
                  <p className="text-sm text-gray-500">Aprovada em Engenharia - UFRJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta e Preço */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              ⏰ OFERTA EXPIRA EM: 23:45:12
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Garante Sua Vaga Agora!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Acesso completo ao método que já transformou mais de 10.000 vidas
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8">
            <div className="text-center mb-8">
              <p className="text-lg opacity-75 line-through mb-2">De R$ 497,00</p>
              <div className="text-6xl font-bold mb-4">
                R$ 97<span className="text-2xl">,00</span>
              </div>
              <p className="text-lg opacity-90">ou 12x de R$ 9,70</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <Check className="h-6 w-6 text-green-400" />
                <span>Método completo para nota 1000</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Check className="h-6 w-6 text-green-400" />
                <span>Mais de 50 redações corrigidas</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Check className="h-6 w-6 text-green-400" />
                <span>Suporte direto com professores</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Check className="h-6 w-6 text-green-400" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Check className="h-6 w-6 text-green-400" />
                <span>Acesso vitalício</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-8 rounded-2xl text-xl transition-all duration-300 hover:scale-105 shadow-2xl mb-4">
              🚀 QUERO GARANTIR MINHA VAGA AGORA
            </button>

            <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
              <span>🔒 Compra 100% Segura</span>
              <span>💳 Cartão ou PIX</span>
              <span>✅ Acesso Imediato</span>
            </div>
          </div>

          <div className="bg-yellow-400 text-black p-6 rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">🎁 BÔNUS EXCLUSIVO</h3>
            <p className="text-lg">
              Quem comprar hoje ganha GRÁTIS: "Kit Emergencial - Como fazer uma redação nota 1000 em 1 hora"
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas antes de garantir sua vaga
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ❓ Funciona mesmo para quem tem dificuldade em escrever?
              </h3>
              <p className="text-gray-600">
                Sim! Nosso método foi desenvolvido especialmente para quem tem dificuldades. 
                Começamos do básico e levamos você até a nota 1000 passo a passo.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⏰ Quanto tempo preciso estudar por dia?
              </h3>
              <p className="text-gray-600">
                Apenas 30 minutos por dia são suficientes. O método é otimizado para 
                quem tem pouco tempo e precisa de resultados rápidos.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                💰 E se eu não ficar satisfeito?
              </h3>
              <p className="text-gray-600">
                Oferecemos garantia incondicional de 30 dias. Se não ficar satisfeito, 
                devolvemos 100% do seu dinheiro, sem perguntas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                📱 Como funciona o acesso?
              </h3>
              <p className="text-gray-600">
                Após a compra, você recebe acesso imediato à plataforma online. 
                Pode estudar no celular, tablet ou computador, quando e onde quiser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ⚠️ Última Chance - Oferta Expira em Breve!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Não deixe sua aprovação para depois. Milhares já garantiram sua vaga na universidade.
          </p>
          <button className="bg-white text-red-600 font-bold py-6 px-12 rounded-2xl text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl">
            🎯 SIM, QUERO TIRAR NOTA 1000 AGORA!
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Award className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">ENEM 1000</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando sonhos em aprovações desde 2020
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <span>© 2024 ENEM 1000. Todos os direitos reservados.</span>
              <span>•</span>
              <a href="#" className="hover:text-white">Termos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Política de Privacidade</a>
              <span>•</span>
              <a href="#" className="hover:text-white">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}