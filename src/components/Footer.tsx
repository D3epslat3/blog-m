'use client'

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Coluna 1 */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-50">Blog-M</h3>
            <p className="text-gray-50">
              Compartilhando conhecimento e ideias inovadoras
            </p>
          </div>

          {/* Coluna 2 */}
          <div className="space-y-4">
            <h4 className="text-gray-50 font-medium mb-4">Navegação</h4>
            <ul className="space-y-2">
              {['Blog', 'Sobre', 'Tags'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-50 hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 pt-8 border-t border-slate-700 text-center text-gray-50"
        >
          <p>© {new Date().getFullYear()} Deepslate. Conhecimento compartilhado.</p>
        </motion.div>
      </div>
    </footer>
  );
}