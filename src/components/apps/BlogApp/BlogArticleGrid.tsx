'use client';

import React from 'react';
import { BlogArticle } from '@/models/blog.model';
import { BlogArticleCard } from './BlogArticleCard';

interface BlogArticleGridProps {
  articles: BlogArticle[];
  loading: boolean;
  onReadArticle?: (art: BlogArticle) => void;
}

export function BlogArticleGrid({ articles, loading, onReadArticle }: BlogArticleGridProps) {
  if (loading) {
    return <div className="py-12 text-center text-xs text-slate-500">Opening Knowledge Base explorer...</div>;
  }

  if (articles.length === 0) {
    return <div className="py-12 text-center text-xs text-slate-500">No knowledge base files found matching search query.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {articles.map(art => (
        <BlogArticleCard key={art.id} article={art} onReadArticle={onReadArticle} />
      ))}
    </div>
  );
}
