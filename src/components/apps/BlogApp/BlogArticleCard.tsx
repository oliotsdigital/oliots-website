'use client';

import React from 'react';
import { Cpu, Gauge, Layers, ChevronRight } from 'lucide-react';
import { BlogArticle } from '@/models/blog.model';

interface BlogArticleCardProps {
  article: BlogArticle;
  onReadArticle?: (art: BlogArticle) => void;
}

export function BlogArticleCard({ article, onReadArticle }: BlogArticleCardProps) {
  const renderIcon = () => {
    switch (article.iconName) {
      case 'Cpu':
        return <Cpu className="w-8 h-8" />;
      case 'Gauge':
        return <Gauge className="w-8 h-8" />;
      case 'Layers':
        return <Layers className="w-8 h-8" />;
      default:
        return <Cpu className="w-8 h-8" />;
    }
  };

  return (
    <article
      onClick={() => onReadArticle && onReadArticle(article)}
      className="win11-card p-4 rounded-xl flex flex-col justify-between group cursor-pointer"
    >
      <div>
        <div className={`h-28 rounded-lg mb-3 flex items-center justify-center ${article.colorClass}`}>
          {renderIcon()}
        </div>
        <div className="flex items-center justify-between text-[10px] font-bold text-winblue-600 mb-1">
          <span>{article.category} • {article.date}</span>
          <span className="text-slate-400 font-normal">{article.readTime}</span>
        </div>
        <h3 className="text-sm font-bold text-slate-900 group-hover:text-winblue-600 transition-colors my-1">
          {article.title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{article.summary}</p>
      </div>

      <span className="text-xs font-semibold text-winblue-600 mt-3 inline-flex items-center">
        Read File <ChevronRight className="w-3 h-3 ml-1" />
      </span>
    </article>
  );
}
